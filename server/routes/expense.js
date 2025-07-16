import { Hono } from "hono";
import { requireAuth } from "../middleware/auth.js";
import {
  createCategory,
  createExpense,
  selectExpense,
  selectDailyExpenseData,
  selectTransationList,
  selectTotalSpent,
  selectCategoryListMonth,
  selectTotalAmountChart,
  selectDashboardData,
  selectDailySpentChart,
  selectCategorySpentChart,
  selectTransactionListDashboard,
} from "../controller/expense.js";
const router = new Hono();

router.post("/add-category", requireAuth, createCategory);
router.post("/add-expense", requireAuth, createExpense);
router.get("/get-expense", requireAuth, selectExpense);
router.get("/get-daily-expense", requireAuth, selectDailyExpenseData);
router.get("/get-transaction-list", requireAuth, selectTransationList);
router.get("/get-total-month-spent", requireAuth, selectTotalSpent);
router.get("/get-category-list-month", requireAuth, selectCategoryListMonth);
router.get("/get-total-chart", requireAuth, selectTotalAmountChart);
router.get("/get-dashboard-data",requireAuth, selectDashboardData);
router.get("/get-daily-spent-chart", requireAuth, selectDailySpentChart);
router.get("/get-category-spent-chart", requireAuth, selectCategorySpentChart);
router.get(
  "/get-transaction-list-dashboard",
  requireAuth,
  selectTransactionListDashboard
);
export default router;
