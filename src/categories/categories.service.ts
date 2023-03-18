import { Injectable } from '@nestjs/common';
import { sumUpExpenses } from 'src/helpers/expenses';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryDto });
  }

  async findAll() {
    const categories = await this.prisma.category.findMany({
      include: {
        Expense: {
          select: {
            amount: true,
          },
        },
      },
    });

    return categories.map(({ Expense, ...category }) => {
      const summary = sumUpExpenses(Expense);
      return { ...category, summary };
    });
  }

  findOne(id: number) {
    return this.prisma.category.findFirstOrThrow({ where: { id } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
