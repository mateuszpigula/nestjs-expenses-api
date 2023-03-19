import { ExpenseEntity } from 'src/expenses/entities/expense.entity';

export const sumUpExpenses = (expenses: Pick<ExpenseEntity, 'amount'>[]) => {
  return expenses.reduce((acc, cur) => (acc += cur.amount), 0);
};
