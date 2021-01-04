import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'this is the users controller';
  }
}
