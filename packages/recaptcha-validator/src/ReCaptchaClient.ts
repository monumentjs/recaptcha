import { ReCaptchaRequest } from './ReCaptchaRequest';
import { ReCaptchaResponse } from './ReCaptchaResponse';

/**
 * Represents client which makes captcha validation request.
 */
export interface ReCaptchaClient {
  send(request: ReCaptchaRequest): Promise<ReCaptchaResponse>;
}
