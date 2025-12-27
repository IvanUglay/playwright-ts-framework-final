import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async checkTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(/FOP/i);
  }
}
