import { Injectable } from '@nestjs/common';
import { UserIdentificationInfo } from '../../interfaces/user.interface';
import { TencentCloudService } from '../../common/third-party/cloud/tencentCloud.service';

@Injectable()
export class IdentifyService {
  constructor(private readonly tencentService: TencentCloudService) {}

  getUserIdentifyResult<T extends UserIdentificationInfo>(userinfo: T): T {
    const re = this.tencentService.getIdCardVerification(
      {
        IdCard: '110108200706306318',
        Name: '郭润',
      },
      {
        credential: {
          secretId: 'AKIDmMr206ArRkodEpTZbdQzpKWb7Vk2B9Jq',
          secretKey: 'VrGVWKwUn0ziFYdT6rNevgX8e1bvzIkx',
        },
        region: '',
        profile: {
          httpProfile: {
            endpoint: 'faceid.tencentcloudapi.com',
          },
        },
      },
    );
    console.log(re);
    return userinfo;
  }
}
