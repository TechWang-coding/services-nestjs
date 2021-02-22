import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { IdentifyService } from "./identify.service";
import { UserIdentificationInfo } from "../../interfaces/user.interface";

@Controller('user')
export class IdentifyController {
  constructor(private identifyService: IdentifyService) {}
  @Post('identify')
  getIdentifyInfo(@Body() req: UserIdentificationInfo): string {

    this.identifyService.getUserIdentifyResult({
      name: req.name,
      idNumber: req.idNumber,
    });
    console.log(req);
    return 'This action returns all cats';
  }
}
