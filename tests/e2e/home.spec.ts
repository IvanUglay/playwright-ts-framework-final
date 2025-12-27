import { test } from '../fixtures/testFixtures';
import { HomePage } from '../../src/ui/pages/home.page';

test('Homepage loads', async ({ page }) => {
  const home = new HomePage(page);

  await home.open();
  await home.checkTitle();
});
