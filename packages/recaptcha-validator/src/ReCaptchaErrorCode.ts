
export enum ReCaptchaErrorCode {
  /**
   * The secret parameter is missing.
   */
  MISSING_INPUT_SECRET = 'missing-input-secret',

  /**
   * The secret parameter is invalid or malformed.
   */
  INVALID_INPUT_SECRET = 'invalid-input-secret',

  /**
   * The response parameter is missing.
   */
  MISSING_INPUT_RESPONSE = 'missing-input-response',

  /**
   * The response parameter is invalid or malformed.
   */
  INVALID_INPUT_RESPONSE = 'invalid-input-response',

  /**
   * The request is invalid or malformed.
   */
  BAD_REQUEST = 'bad-request',

  /**
   * The response is no longer valid: either is too old or has been used previously.
   */
  TIMEOUT_OR_DUPLICATE = 'timeout-or-duplicate'
}
