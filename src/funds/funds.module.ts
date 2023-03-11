import { Module } from '@nestjs/common';
import { FundsService } from './funds.service';
import { FundsController } from './funds.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FundsController],
  providers: [FundsService],
  imports: [PrismaModule],
})
export class FundsModule {}
