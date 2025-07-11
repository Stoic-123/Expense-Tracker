import { db } from "../config/db.js";

export const insertNewCategory = async (name, color) => {
  const sql = "INSERT INTO expense_categories (name,color) VALUE(?,?)";
  const [row] = await db.query(sql, [name, color]);
  return {
    id: row.insertId,
    name,
    color,
  };
};
export const insertNewExpense = async (
  user_id,
  amount,
  description,
  category_id,
  date
) => {
  const sql =
    "INSERT INTO expense_tracker (user_id, amount, description, category_id, date) VALUE(?,?,?,?,?)";
  const [row] = await db.query(sql, [
    user_id,
    amount,
    description,
    category_id,
    date,
  ]);
  return {
    id: row.insertId,
    user_id,
    amount,
    description,
    category_id,
    date,
  };
};
export const getExpenseRecord = async (user_id) => {
  const sql = `SELECT
                 e.amount, 
                 e.description, 
                 e.date, 
                 c.name as category_name, 
                 c.color as category_color 
                 FROM expense_tracker e 
                 LEFT JOIN expense_categories c ON e.category_id = c.id
                 WHERE user_id =?`;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getDailyTotal = async (user_id) => {
  const sql = `SELECT
                SUM(amount) as daily_amount,
                COUNT(*) as transaction
                FROM expense_tracker
                WHERE date = CURDATE()
                AND user_id = ?
  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getAveragePerTransaction = async (user_id) => {
  const sql = `SELECT
                  SUM(amount)/COUNT(*) as average_per_transaction
                  FROM expense_tracker
                  WHERE date = CURDATE() 
                  AND user_id =?
    `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getMostSpentCategory = async (user_id) => {
  const sql = `SELECT 
                c.name,
                SUM(e.amount) as total_spent
                FROM expense_tracker e
                LEFT JOIN expense_categories c ON e.category_id = c.id
                GROUP BY e.category_id
                ORDER BY total_spent DESC
                LIMIT 1

  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getTransactionList = async (user_id) => {
  const sql = `SELECT 
                e.description,
                e.amount,
                e.date,
                c.name as category_name,
                c.color as category_color
                FROM expense_tracker e
                LEFT JOIN expense_categories c
                ON e.category_id = c.id
                WHERE date = CURDATE()  
                AND user_id =?        
  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getTotalSpentMonth = async (user_id) => {
  const sql = `SELECT
                SUM(amount) as total_month_spent,
                COUNT(*) as total_month_transaction,
                ROUND(SUM(amount) / COUNT(*), 2) AS average_daily
                FROM expense_tracker 
                WHERE user_id = ? 
                AND MONTH(date) = MONTH(CURDATE()) 
                AND YEAR(date) = YEAR(CURDATE())
  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getCategoryListMonth = async (user_id) => {
  const sql = `SELECT 
                c.name AS category_name,
                SUM(e.amount) AS total_amount
              FROM expense_tracker e
              LEFT JOIN expense_categories c ON e.category_id = c.id
              WHERE e.user_id = ?
                AND MONTH(e.date) = MONTH(CURDATE())
                AND YEAR(e.date) = YEAR(CURDATE())
              GROUP BY c.id
              ORDER BY total_amount DESC;
  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getTotalAmountWeek = async (user_id) => {
  const sql = `SELECT
                w.week_of_month,
                COALESCE(SUM(e.amount), 0) AS total_spent
              FROM (
                SELECT 1 AS week_of_month
                UNION SELECT 2
                UNION SELECT 3
                UNION SELECT 4
                UNION SELECT 5
              ) AS w
              LEFT JOIN expense_tracker e
                ON FLOOR((DAY(e.date)-1)/7)+1 = w.week_of_month
                AND MONTH(e.date) = MONTH(CURDATE())
                AND YEAR(e.date) = YEAR(CURDATE())
              GROUP BY w.week_of_month
              ORDER BY w.week_of_month;
  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
