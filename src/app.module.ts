import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExpensesModule } from './expenses/expenses.module';
import { CategoriesModule } from './categories/categories.module';
import { FundsModule } from './funds/funds.module';

@Module({
  imports: [PrismaModule, ExpensesModule, CategoriesModule, FundsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
