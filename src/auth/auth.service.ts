import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validationUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUserById(email);

    if (!user) return null;

    const isMatch = await bcrypt.compare(pass, user.password);
    
    return null;
  }
}
