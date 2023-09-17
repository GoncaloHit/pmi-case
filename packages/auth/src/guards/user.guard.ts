import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";


@Injectable()
export class UsersGuard implements CanActivate {
  constructor() { }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.headers.authorization?.replace('Bearer ', '');

    //ideally we check for a jwt, just for demo purposes
    if (!token || token !== 'veryimportanttoken') throw new UnauthorizedException();

    return true;
  }
}