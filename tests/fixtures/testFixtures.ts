import { test as base } from '@playwright/test';
import { HomePage } from '../../src/ui/pages/home.page';
import { HealthApi } from '../../src/api/clients/health.api';

type Fixtures = {
  homePage: HomePage;
  healthApi: HealthApi;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  healthApi: async ({ request }, use) => {
    await use(new HealthApi(request));
  },
});
