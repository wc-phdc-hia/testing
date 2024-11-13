import { test as baseTest } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export * from '@playwright/test';

export const test = baseTest.extend({}, { workerStorageState: '' });({
  // Use the same storage state for all tests in this worker.
  storageState: ({ workerStorageState }, use) => use(workerStorageState),

  // Authenticate once per worker with a worker-scoped fixture.
  workerStorageState: [
    async ({ browser }, use) => {
      // Use parallelIndex as a unique identifier for each worker.
      const id = test.info().parallelIndex;
      const fileName = path.resolve(test.info().project.outputDir, `.auth/${id}.json`);

      if (fs.existsSync(fileName)) {
        // Reuse existing authentication state if any.
        await use(fileName);
        return;
      }

      // Important: make sure we authenticate in a clean environment by unsetting storage state.
      const page = await browser.newPage({ storageState: undefined });

      // Perform authentication steps with your unique details.
      await page.goto('http://localhost:5380/');
      await page.locator('text=Log In').click();
      await page.fill('input[name="user"]', 'default');
      await page.fill('input[name="password"]', 'SunShinE101!!##');
      await page.locator('text=Sign in to SPV').click();
      await page.locator('text=Accept and Continue').click();
      await Promise.all([
        page.waitForNavigation(),
        page.click('button[type="submit"]'),
      ]);
      // Wait until the page receives the cookies or reaches a specific URL.
      await page.waitForURL('http://localhost:5380/Search');

      // End of authentication steps.

      await page.context().storageState({ path: fileName });
      await page.close();
      await use(fileName);
    },
    { scope: 'worker' },
  ],
});
