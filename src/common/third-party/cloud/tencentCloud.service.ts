import { Injectable } from '@nestjs/common';
import * as TencentCloudSDK from 'tencentcloud-sdk-nodejs';
import { ClientConfig } from 'tencentcloud-sdk-nodejs/src/common/interface';
import { IdCardVerificationRequest } from 'tencentcloud-sdk-nodejs/tencentcloud/services/faceid/v20180301/faceid_models';

@Injectable()
export class TencentCloudService {
  async getIdCardVerification(
    param: IdCardVerificationRequest,
    clientConfig: ClientConfig,
  ) {
    const faceIdClient = TencentCloudSDK.faceid.v20180301.Client;
    const client = new faceIdClient(clientConfig);
    const result = await client.IdCardVerification(param);
    console.log(result);
  }
}
