import { Module } from '@nestjs/common';
import { TencentCloudService } from './tencentCloud.service';

@Module({
  providers: [TencentCloudService],
  exports: [TencentCloudService],
})
export class ThirdPartyCloudMoudle {}
