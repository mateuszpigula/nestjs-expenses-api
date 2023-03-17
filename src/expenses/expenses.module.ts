import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ExpensesRepository } from './expenses.repository';

@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService, ExpensesRepository],
  imports: [PrismaModule],
})
export class ExpensesModule {}
