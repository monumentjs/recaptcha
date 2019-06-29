
export interface ReCaptchaRequest {
  /**
   * The shared key between your site and reCAPTCHA.
   */
  readonly secret: string;

  /**
   * The user response token provided by the reCAPTCHA client-side integration on your site.
   */
  readonly response: string;

  /**
   * Optional. The user's IP address.
   */
  readonly remoteip?: string;
}
