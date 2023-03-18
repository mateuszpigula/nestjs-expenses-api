import { Expense } from '@prisma/client';

export const sumUpExpenses = (expenses: Pick<Expense, 'amount'>[]) => {
  return expenses.reduce((acc, cur) => (acc += cur.amount), 0);
};
