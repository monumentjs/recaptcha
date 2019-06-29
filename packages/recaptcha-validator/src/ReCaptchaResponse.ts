import { ReCaptchaErrorCode } from './ReCaptchaErrorCode';

export interface ReCaptchaSuccessResponse {
  readonly success: true;
  /**
   * Timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ).
   */
  readonly challenge_ts: string;
  /**
   * The hostname of the site where the reCAPTCHA was solved.
   */
  readonly hostname: string;
}

export interface ReCaptchaErrorResponse {
  readonly success: false;
  /**
   * Timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ).
   */
  readonly challenge_ts: string;
  /**
   * The hostname of the site where the reCAPTCHA was solved.
   */
  readonly hostname: string;
  /**
   * Optional. List of error codes.
   */
  readonly 'error-codes': ReCaptchaErrorCode[];
}

export type ReCaptchaResponse = ReCaptchaSuccessResponse | ReCaptchaErrorResponse;
