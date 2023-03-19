import { Expense } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ExpenseEntity implements Expense {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: number;

  @ApiProperty({ required: false, nullable: true })
  note: string | null;

  @ApiProperty({ required: false, nullable: true })
  fundId: number | null;

  @ApiProperty()
  spenderId: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  spentAt: Date;
}
