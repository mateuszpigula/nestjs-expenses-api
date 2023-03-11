import { ApiProperty } from '@nestjs/swagger';

export class CreateFundDto {
  @ApiProperty()
  name: string;
}
