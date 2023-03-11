import { Injectable } from '@nestjs/common';
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
          select: {
            amount: true,
          },
        },
      },
    });

    return funds.map(({ Expense, ...fund }) => {
      const summary = Expense.reduce((acc, cur) => (acc += cur.amount), 0);
      return { ...fund, summary };
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} fund`;
  }

  update(id: number, updateFundDto: UpdateFundDto) {
    return `This action updates a #${id} fund`;
  }

  remove(id: number) {
    return this.prisma.fund.delete({ where: { id } });
  }
}
