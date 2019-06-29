import { ReCaptchaClient } from '../ReCaptchaClient';
import { ReCaptchaRequest } from '../ReCaptchaRequest';
import { ReCaptchaResponse } from '../ReCaptchaResponse';

export class ReCaptchaFakeClient implements ReCaptchaClient {
  constructor(
    readonly response: ReCaptchaResponse
  ) {}

  async send(request: ReCaptchaRequest): Promise<ReCaptchaResponse> {
    return this.response;
  }
}
