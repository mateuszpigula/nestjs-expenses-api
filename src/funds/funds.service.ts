import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { sumUpExpenses } from 'src/helpers/expenses';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFundDto } from './dto/create-fund.dto';
import { UpdateFundDto } from './dto/update-fund.dto';

@Injectable()
export class FundsService {
  constructor(private prisma: PrismaService) {}

  create(createFundDto: CreateFundDto) {
    return this.prisma.fund.create({ data: createFundDto });
  }

  async findAll() {
    const funds = await this.prisma.fund.findMany({
      include: {
        Expense: {
          where: {
            spentAt: {
              gte: dayjs().startOf('month').toDate(),
              lt: dayjs().endOf('month').toDate(),
            },
          },
          select: {
            amount: true,
          },
        },
      },
    });

    return funds.map(({ Expense, ...fund }) => {
      const summary = sumUpExpenses(Expense);
      return { ...fund, summary };
    });
  }

  findOne(id: number) {
    return this.prisma.fund.findFirstOrThrow({ where: { id } });
  }

  async update(id: number, updateFundDto: UpdateFundDto) {
    const updatedFund = await this.prisma.fund.update({
      where: { id },
      data: updateFundDto,
      include: {
        Expense: {
          select: {
            amount: true,
          },
        },
      },
    });

    return {
      ...updatedFund,
      summary: sumUpExpenses(updatedFund.Expense),
    };
  }

  remove(id: number) {
    return this.prisma.fund.delete({ where: { id } });
  }
}
