
import { inngest } from "@/lib/inngest/client";
import { generateMonthlyReports } from "@/lib/inngest/function";
import {
    checkBudgetAlerts,
    processRecurringTransaction,
    triggerRecurringTransactions,
} from "@/lib/inngest/function";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    checkBudgetAlerts,
    triggerRecurringTransactions,
    processRecurringTransaction,
    generateMonthlyReports
  ],
});