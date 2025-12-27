import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly logo: Locator;

  constructor(page: Page) {
    this.logo = page.locator('header img');
  }

  async isVisible() {
    return this.logo.isVisible();
  }
}
