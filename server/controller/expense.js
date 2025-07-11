import { message } from "antd";
import {
  insertNewCategory,
  insertNewExpense,
  getExpenseRecord,
  getDailyTotal,
  getAveragePerTransaction,
  getMostSpentCategory,
  getTransactionList,
  getTotalSpentMonth,
  getCategoryListMonth,
  getTotalAmountWeek,
  getDashboardTotalSpent,
  getDashboardAverageDailySpent,
  getDashboardTransaction,
  getDashboradCategory,
} from "../model/expense.js";
export const createCategory = async (c) => {
  try {
    const { name, color } = await c.req.json();
    if (!name || !color) {
      return c.json({ result: false, message: "Name is not define..!" }, 400);
    }
    const newCategory = await insertNewCategory(name, color);
    return c.json(
      {
        result: true,
        message: "Category created successfully..",
        category: {
          id: newCategory.id,
          name: newCategory.name,
          color: newCategory.color,
        },
      },
      200
    );
  } catch (error) {
    return c.json({ result: false, message: error });
  }
};
export const createExpense = async (c) => {
  try {
    const { amount, description, category_id, date } = await c.req.json();
    const user_id = c.get("user").id;
    if (!user_id || !amount || !description || !category_id || !date) {
      return c.json(
        {
          result: false,
          message: "All data are required and defined..!",
        },
        401
      );
    }
    const newExpense = await insertNewExpense(
      user_id,
      amount,
      description,
      category_id,
      date
    );
    return c.json(
      {
        result: true,
        message: "Expense created successfully..",
        expense: {
          id: newExpense.id,
          user_id: user_id,
          amount: newExpense.amount,
          description: newExpense.description,
          category: newExpense.category_id,
          date: newExpense.date,
        },
      },
      200
    );
  } catch (error) {
    return c.json({ result: false, message: error });
  }
};
export const selectExpense = async (c) => {
  try {
    const user_id = c.get("user").id;
    if (!user_id) {
      return c.json(
        { result: false, message: "User_id is not defined..!" },
        401
      );
    }
    const expenseRecord = await getExpenseRecord(user_id);
    if (expenseRecord.length === 0) {
      return c.json(
        { result: false, message: "No expense record data in database..!" },
        401
      );
    }
    return c.json(
      {
        result: true,
        message: "Get expense record successfully..",
        expense_record: expenseRecord.row,
      },
      200
    );
  } catch (error) {
    return c.json({ result: false, message: error });
  }
};
export const selectDailyExpenseData = async (c) => {
  try {
    const user_id = c.get("user").id;
    if (!user_id) {
      return c.json(
        { result: false, message: "User_id is not defined..!" },
        401
      );
    }
    const totalData = await getDailyTotal(user_id);
    const averageTransaction = await getAveragePerTransaction(user_id);
    const mostSpentCategory = await getMostSpentCategory(user_id);
    const daily_amount = totalData.row[0].daily_amount;
    const transaction = totalData.row[0].transaction;
    const average_per_transaction =
      averageTransaction.row[0].average_per_transaction;
    const most_spent_category = mostSpentCategory.row[0].name;
    const total_most_spent_category = mostSpentCategory.row[0].total_spent;
    if (
      totalData.length === 0 ||
      averageTransaction.length === 0 ||
      mostSpentCategory.length === 0
    ) {
      return c.json({
        result: false,
        message: "Data is not defined in database..!",
      });
    }
    return c.json({
      result: true,
      message: "Data selected successfully..",
      data: {
        daily_amount,
        transaction,
        average_per_transaction,
        most_spent_category,
        total_most_spent_category,
      },
    });
  } catch (error) {
    return c.json({ result: false, message: error });
  }
};
export const selectTransationList = async (c) => {
  try {
    const user_id = c.get("user").id;
    if (!user_id) {
      return c.json(
        { result: false, message: "User_id is not defined..!" },
        401
      );
    }
    const transactionList = await getTransactionList(user_id);
    if (transactionList.length === 0) {
      return c.json(
        { result: false, message: "No data found in database..!" },
        401
      );
    }
    return c.json(
      {
        result: true,
        message: "Date selected successfully..",
        data: transactionList.row,
      },
      200
    );
  } catch (error) {
    return c.json({ result: false, message: error }, 401);
  }
};
export const selectTotalSpent = async (c) => {
  try {
    const user_id = c.get("user").id;
    if (!user_id) {
      return c.json(
        { result: false, message: "User_id is not defined..!" },
        401
      );
    }
    const totalSpentData = await getTotalSpentMonth(user_id);
    if (totalSpentData.length === 0) {
      return c.json({ result: false, message: "No data in database..!" }, 401);
    }
    return c.json({
      result: true,
      message: "Data selected successfully..",
      data: totalSpentData.row,
    });
  } catch (error) {
    return c.json({ result: false, message: error }, 401);
  }
};
export const selectCategoryListMonth = async (c) => {
  try {
    const user_id = c.get("user").id;
    if (!user_id) {
      return c.json(
        { result: false, message: "User_id is not defined..!" },
        401
      );
    }
    const CategoryListMonth = await getCategoryListMonth(user_id);
    if (CategoryListMonth.lenth === 0) {
      return c.json({ result: false, message: "No data in database..!" }, 401);
    }
    return c.json(
      {
        result: true,
        message: "Data selected successfully..",
        data: CategoryListMonth.row,
      },
      200
    );
  } catch (error) {
    return c.json({ result: false, message: error }, 401);
  }
};
export const selectTotalAmountChart = async (c) => {
  try {
    const user_id = c.get("user").id;
    if (!user_id) {
      return c.json(
        { result: false, message: "User_id is not defined..!" },
        401
      );
    }
    const TotalAmountChart = await getTotalAmountWeek(user_id);
    if (TotalAmountChart.length === 0) {
      return c.json({ result: false, message: "No data in database.." }, 401);
    }
    return c.json({
      result: true,
      message: "Data selected successfully..",
      data: TotalAmountChart.row,
    });
  } catch (error) {
    return c.json({ result: false, message: error }, 401);
  }
};
export const selectDashboardData = async (c) => {
  try {
    const user_id = c.get("user").id;
    if (!user_id) {
      return c.json(
        { result: false, message: "User_id is not defined..!" },
        401
      );
    }
    const totalSpentData = await getDashboardTotalSpent(user_id);
    const averageSpentData = await getDashboardAverageDailySpent(user_id);
    const transactionData = await getDashboardTransaction(user_id);
    const categoryData = await getDashboradCategory(user_id);
    const total_spent = totalSpentData.thistMonth[0].total;
    const total_percent = totalSpentData.percent;
    const total_average = averageSpentData.avgThisMonth[0].average_daily;
    const average_percent = averageSpentData.avg_percent;
    const total_transaction = transactionData.tranThisMonth[0].transaction;
    const transaction_percent = transactionData.tran_percent;
    const total_category = categoryData.catThisMonth[0].category;
    const category_percent = categoryData.category_percent;
    if (
      !totalSpentData ||
      !averageSpentData ||
      !transactionData ||
      !categoryData
    ) {
      return c.json({ result: false, message: "No data in database..!" }, 401);
    }
    return c.json({
      result: true,
      message: "Data selected successfully..",
      data: {
        total_spent,
        total_percent,
        total_average,
        average_percent,
        total_transaction,
        transaction_percent,
        total_category,
        category_percent,
      },
    });
  } catch (error) {
    return c.json({ result: false, message: error });
  }
};
