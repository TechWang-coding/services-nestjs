import { HttpModule, Module } from '@nestjs/common';
import { IdentifyService } from './identify.service';
import { IdentifyController } from './identify.controller';
import { ThirdPartyCloudMoudle } from '../../common/third-party/cloud/thirdparty.cloud.moudle';

@Module({
  imports: [HttpModule, ThirdPartyCloudMoudle],
  controllers: [IdentifyController],
  providers: [IdentifyService],
})
export class IdentifyModule {}
