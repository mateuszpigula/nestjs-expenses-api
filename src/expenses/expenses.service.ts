import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpensesRepository } from './expenses.repository';

@Injectable()
export class ExpensesService {
  constructor(private readonly expensesRepository: ExpensesRepository) {}

  async create(createExpenseDto: CreateExpenseDto) {
    return this.expensesRepository.create(createExpenseDto);
  }

  async findAll(date?: string) {
    return this.expensesRepository.findAll(date);
  }

  async findOne(id: number) {
    return this.expensesRepository.findExpenseById(id);
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return this.expensesRepository.update(id, updateExpenseDto);
  }

  async remove(id: number) {
    return this.expensesRepository.delete(id);
  }
}
