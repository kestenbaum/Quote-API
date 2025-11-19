import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserDto[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(id: string): Promise<UserDto | null> {
    return this.userService.getUserById(id);
  }

  @Post('/create')
  async createUser(@Body() dataUser: UserDto): Promise<UserDto> {
    return this.userService.createUser(dataUser);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    updateData: UserDto,
  ): Promise<UserDto | null> {
    return this.userService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
