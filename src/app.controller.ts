import { Controller, Request, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from './auth/strategies/jwt-auth.guard';
import { Request as TRequest } from 'express';
@Controller()
export class AppController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: TRequest) {
    return req.user;
  }
}
