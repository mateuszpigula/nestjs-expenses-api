import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  spenderId: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  fundId?: number;
}
