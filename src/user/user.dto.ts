export class CreateUserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  googleId: string;
}

export class UpdateUserDto {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  googleId?: string;
}
