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
                 e.id,
                 e.amount, 
                 e.description, 
                 e.date , 
                 c.name as category_name, 
                 c.color as category_color 
                 FROM expense_tracker e 
                 LEFT JOIN expense_categories c ON e.category_id = c.id
                 WHERE user_id =?
                 ORDER BY date DESC  
                 `;
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
export const getDashboardTotalSpent = async (user_id) => {
  const sql = `SELECT 
                SUM(amount) as total
                FROM expense_tracker
                WHERE user_id=?
                AND MONTH(date) = MONTH(CURDATE())
                AND YEAR(date) = YEAR(CURDATE())
  `;
  const sql2 = `SELECT 
                SUM(amount) as total
                FROM expense_tracker
                WHERE user_id=?
                AND MONTH(date) = MONTH(CURDATE() - INTERVAL 1 MONTH)
                AND YEAR(date) = YEAR(CURDATE() - INTERVAL 1 MONTH)
  `;
  const totalThisMonth = await db.query(sql, [user_id]);
  const totalLastMonth = await db.query(sql2, [user_id]);
  const thistMonth = totalThisMonth[0];
  const lastMonth = totalLastMonth[0];
  const thisMonthValue = thistMonth[0]?.total;
  const lastMonthValue = lastMonth[0]?.total;
  let percent = 0;
  if (lastMonthValue !== 0) {
    percent =
      ((thisMonthValue - lastMonthValue) / Math.abs(lastMonthValue)) * 100;
  }
  return {
    thistMonth: Number(thisMonthValue),
    percent: Number(percent.toFixed(2)),
  };
};
export const getDashboardAverageDailySpent = async (user_id) => {
  const sql = `SELECT
                ROUND(SUM(amount)/COUNT(*),2) as average_daily
                FROM expense_tracker
                WHERE user_id =?
                AND MONTH(date) = MONTH(CURDATE())
                AND YEAR(date) = YEAR(CURDATE())
  `;
  const sql2 = `SELECT
                  ROUND(SUM(amount)/COUNT(*),2) as average_daily
                  FROM expense_tracker
                  WHERE user_id =?
                  AND MONTH(date) = MONTH(CURDATE() - INTERVAL 1 MONTH)
                  AND YEAR(date) = YEAR(CURDATE() - INTERVAL 1 MONTH)
  `;
  const averageThisMonth = await db.query(sql, [user_id]);
  const averageLastMonth = await db.query(sql2, [user_id]);
  const avgThisMonth = averageThisMonth[0];
  const avgLastMonth = averageLastMonth[0];
  const avgThisMonthValue = avgThisMonth[0]?.average_daily || 0;
  const avgLastMonthValue = avgLastMonth[0]?.average_daily || 0;

  let avg_percent = 0;
  if (avgLastMonthValue !== 0) {
    avg_percent =
      ((avgThisMonthValue - avgLastMonthValue) / Math.abs(avgLastMonthValue)) *
      100;
  }
  return {
    avgThisMonth: Number(avgThisMonthValue),
    avg_percent: Number(avg_percent.toFixed(2)),
  };
};
export const getDashboardTransaction = async (user_id) => {
  const sql = `SELECT
                COUNT(*) as transaction
                FROM expense_tracker
                WHERE user_id =?
                AND MONTH(date) = MONTH(CURDATE())
                AND YEAR(date) = YEAR(CURDATE())
  `;

  const sql2 = `SELECT
                  COUNT(*) as transaction
                  FROM expense_tracker
                  WHERE user_id =?
                  AND MONTH(date) = MONTH(CURDATE() - INTERVAL 1 MONTH)
                  AND YEAR(date) = YEAR(CURDATE() - INTERVAL 1 MONTH)
             `;
  const sql3 = `SELECT
                COUNT(*) as transaction
                FROM expense_tracker
                WHERE user_id =?
  `;
  const transactionThismonth = await db.query(sql, [user_id]);
  const transactionLastmonth = await db.query(sql2, [user_id]);
  const transactionTotal = await db.query(sql3, [user_id]);
  const tranThisMonth = transactionThismonth[0];
  const tranLastMonth = transactionLastmonth[0];
  const totalTransaction = transactionTotal[0];
  const tranThisMonthValue = tranThisMonth[0]?.transaction || 0;
  const tranLastMonthValue = tranLastMonth[0]?.transaction || 0;
  const totalTransactionValue = totalTransaction[0]?.transaction || 0;

  let tran_percent = 0;
  if (tranLastMonthValue !== 0) {
    tran_percent =
      ((tranThisMonthValue - tranLastMonthValue) /
        Math.abs(tranLastMonthValue)) *
      100;
  }
  return {
    totalTransaction: totalTransactionValue,
    tran_percent: Number(tran_percent.toFixed(2)),
  };
};
export const getDashboardCategory = async (user_id) => {
  const sql = `SELECT
                COUNT(DISTINCT c.id) as category
                FROM expense_categories c
                LEFT JOIN expense_tracker e 
                ON c.id = e.category_id
                WHERE e.user_id=?
                AND MONTH(e.date) = MONTH(CURDATE())
                AND YEAR(e.date) = YEAR(CURDATE())
  `;
  const sql2 = `SELECT
                COUNT(DISTINCT c.id) as category
                FROM expense_categories c
                LEFT JOIN expense_tracker e 
                ON c.id = e.category_id
                WHERE e.user_id=?
                AND MONTH(e.date) = MONTH(CURDATE() - INTERVAL 1 MONTH)
                AND YEAR(e.date) = YEAR(CURDATE() - INTERVAL 1 MONTH)
  `;
  const sql3 = `SELECT
                COUNT(DISTINCT c.id) as category
                FROM expense_categories c
                LEFT JOIN expense_tracker e 
                ON c.id = e.category_id
                WHERE e.user_id=?
  `;
  const categoryThisMonth = await db.query(sql, [user_id]);
  const categoryLastMonth = await db.query(sql2, [user_id]);
  const totalCategory = await db.query(sql3, [user_id]);
  const catThisMonth = categoryThisMonth[0];
  const catLastMonth = categoryLastMonth[0];
  const totalCat = totalCategory[0];
  const catThisMonthValue = catThisMonth[0]?.category || 0;
  const catLastMonthValue = catLastMonth[0]?.category || 0;
  const totalCategoryValue = totalCat[0]?.category || 0;

  let category_percent = 0;
  if (catLastMonthValue !== 0) {
    category_percent =
      ((catThisMonthValue - catLastMonthValue) / Math.abs(catLastMonthValue)) *
      100;
  }
  return {
    totalCategory: totalCategoryValue,
    category_percent: Number(category_percent.toFixed(2)),
  };
};
export const getDailySpentChart = async (user_id) => {
  const sql = `WITH RECURSIVE dates AS (
                SELECT CURDATE() - INTERVAL 6 DAY AS day
                UNION ALL
                SELECT day + INTERVAL 1 DAY FROM dates WHERE day < CURDATE()
              )
              SELECT
                DATE_FORMAT(d.day, '%b %d') AS day,
                COALESCE(SUM(e.amount), 0) AS amount
              FROM dates d
              LEFT JOIN expense_tracker e
                ON DATE(e.date) = d.day
                AND e.user_id = ?
              GROUP BY d.day
              ORDER BY d.day;
  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getSpentCategoryChart = async (user_id) => {
  const sql = `SELECT
                SUM(e.amount) as amount,
                c.name as name,
                c.color as category_color
                FROM expense_tracker e
                LEFT JOIN expense_categories c
                ON e.category_id = c.id
                WHERE e.user_id =?
                GROUP BY c.id
  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
export const getTransactionListDashboard = async (user_id) => {
  const sql = `SELECT
                e.id,
                e.description,
                e.amount,
                e.date,
                c.name as category_name,
                c.color as category_color
                FROM expense_tracker e
                LEFT JOIN expense_categories c
                ON e.category_id = c.id
                WHERE user_id =?
                ORDER BY date DESC LIMIT 6
  `;
  const [row] = await db.query(sql, [user_id]);
  return { row };
};
