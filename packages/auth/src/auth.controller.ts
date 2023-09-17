import { Controller, Get, HttpCode, UseGuards } from "@nestjs/common";
import { UsersGuard } from "./guards/user.guard";

@Controller()
export class AuthController {
  constructor() { }

  @UseGuards(UsersGuard)
  @HttpCode(200)
  @Get()
  info() { }
}
