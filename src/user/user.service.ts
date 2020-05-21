import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './user-create.dto';

@Injectable()
export class UserService {
    async signUp(userCreateDto: UserCreateDto): Promise<void> {
      }
}
