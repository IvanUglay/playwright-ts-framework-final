import { APIRequestContext } from '@playwright/test';
import { ENV } from '../../config/env';
import { Logger } from '../../utils/logger';

export class HealthApi {
  constructor(private readonly request: APIRequestContext) {}

  async getHealth() {
    Logger.info('Sending GET /health request');
    return this.request.get(`${ENV.apiUrl}/health`);
  }
}
