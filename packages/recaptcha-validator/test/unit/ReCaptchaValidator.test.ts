import { ReCaptchaErrorCode, ReCaptchaFakeClient, ReCaptchaValidationException, ReCaptchaValidator } from '../..';

const SECRET = 'secret';
const RESPONSE = 'response';
const HOST_NAME = 'test.com';
const TIMESTAMP = new Date().toString();

describe('ReCaptchaValidator', function() {
  it('should return validation result if success', async () => {
    const client = new ReCaptchaFakeClient({
      success: true,
      hostname: HOST_NAME,
      challenge_ts: TIMESTAMP
    });
    const validator = new ReCaptchaValidator(client, SECRET);

    const result = await validator.validate(RESPONSE);

    expect(result.hostName).toBe(HOST_NAME);
    expect(result.challengeTimestamp.toString()).toBe(TIMESTAMP);
  });

  it('should throw if error', async () => {
    const client = new ReCaptchaFakeClient({
      success: false,
      hostname: HOST_NAME,
      challenge_ts: TIMESTAMP,
      'error-codes': [
        ReCaptchaErrorCode.BAD_REQUEST
      ]
    });
    const validator = new ReCaptchaValidator(client, SECRET);

    await expect(validator.validate(RESPONSE)).rejects.toThrow(ReCaptchaValidationException);
  });
});
