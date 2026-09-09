import { Controller, Post } from '@nestjs/common';
import { UserService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UsersDocument } from './schemas/users.schema.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Controller('users')
export class UsersController {
    @Post()
    create
}
