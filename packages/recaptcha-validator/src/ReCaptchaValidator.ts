import { ReCaptchaResponse } from './ReCaptchaResponse';
import { ReCaptchaValidationResult } from './ReCaptchaValidationResult';
import { ReCaptchaValidationException } from './ReCaptchaValidationException';
import { ReCaptchaClient } from './ReCaptchaClient';

export class ReCaptchaValidator {

  constructor(
    private readonly client: ReCaptchaClient,
    private readonly secret: string
  ) {
  }

  validate(token: string, remoteIp?: string): Promise<ReCaptchaValidationResult> {
    return this.client.send({
      secret: this.secret,
      response: token,
      remoteip: remoteIp
    }).then((response: ReCaptchaResponse) => {
      if (!response.success) {
        throw new ReCaptchaValidationException(response['error-codes']);
      }

      return new ReCaptchaValidationResult(new Date(response.challenge_ts), response.hostname);
    });
  }
}
