import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Expense } from '.prisma/client';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import dayjs from 'dayjs';

@Injectable()
export class ExpensesRepository {
  constructor(private prisma: PrismaService) {}

  async create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    return await this.prisma.expense.create({
      data: createExpenseDto,
      include: {
        spender: true,
        category: true,
      },
    });
  }

  async findAll(date?: string): Promise<Expense[]> {
    const where = date
      ? {
          spentAt: {
            gte: dayjs(date).toDate(),
            lt: dayjs(date).endOf('month').toDate(),
          },
        }
      : {};

    return await this.prisma.expense.findMany({
      where,
      include: {
        spender: true,
        category: true,
      },
      orderBy: {
        spentAt: 'desc',
      },
    });
  }

  async findExpenseById(id: number): Promise<Expense> {
    return await this.prisma.expense.findFirstOrThrow({ where: { id } });
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto): Promise<Expense> {
    return await this.prisma.expense.update({
      where: { id },
      data: updateExpenseDto,
      include: {
        spender: true,
        category: true,
      },
    });
  }

  async delete(id: number): Promise<true> {
    await this.prisma.expense.delete({ where: { id } });

    return true;
  }
}
