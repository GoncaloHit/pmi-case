import { Controller, Get, HttpCode } from "@nestjs/common";

@Controller()
export class AuthController {
  constructor() { }

  @HttpCode(200)
  @Get()
  info() { }
}
