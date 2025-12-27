import { test as base } from '@playwright/test';

base.beforeEach(async ({ page }) => {
  console.log('Starting test...');
});
