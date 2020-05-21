import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {UserCreateDto } from './user-create.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

@Post('/signup')
  async signUp(
    @Body() userCreateDto: UserCreateDto,
  ): Promise<void> {
    console.log('This is not seen if validation fails')
    return this.userService.signUp(userCreateDto);
  }
}