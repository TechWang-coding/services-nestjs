import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentifyController } from "./user/identify/identify.controller";
import { IdentifyModule } from "./user/identify/identify.module";

@Module({
  imports: [IdentifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
