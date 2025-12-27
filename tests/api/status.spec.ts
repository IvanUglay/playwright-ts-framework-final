import { test } from '../fixtures/testFixtures';
import { expect } from '@playwright/test';

test('Health API is reachable', async ({ healthApi }) => {
  const response = await healthApi.getHealth();
  expect(response.ok()).toBeTruthy();
});
