import fetch, { Response } from 'node-fetch';
import { ReCaptchaClient } from './ReCaptchaClient';
import { ReCaptchaResponse } from './ReCaptchaResponse';
import { ReCaptchaRequest } from './ReCaptchaRequest';

export class ReCaptchaHttpClient implements ReCaptchaClient {
  constructor(
    readonly apiUrl: string = 'https://www.google.com/recaptcha/api/siteverify'
  ) {}

  send(request: ReCaptchaRequest): Promise<ReCaptchaResponse> {
    return fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res: Response) => res.json())
  }
}
