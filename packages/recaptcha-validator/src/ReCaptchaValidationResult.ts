
export class ReCaptchaValidationResult {
  constructor(
    readonly challengeTimestamp: Date,
    readonly hostName: string
  ) {}
}
