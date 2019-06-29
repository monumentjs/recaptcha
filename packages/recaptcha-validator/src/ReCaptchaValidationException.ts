import { Exception } from '@monument/core';
import { ReCaptchaErrorCode } from './ReCaptchaErrorCode';

export class ReCaptchaValidationException extends Exception {
  constructor(readonly codes: ReCaptchaErrorCode[]) {
    super(`Captcha validation failed. Reason(s): ${codes.join(', ')}.`);
  }
}
