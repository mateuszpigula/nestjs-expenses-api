import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExpensesModule } from './expenses/expenses.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [PrismaModule, ExpensesModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
