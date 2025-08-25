import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

expect.extend({
  async toBeAccessible(page) {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const { violations } = accessibilityScanResults;
    if (violations.length > 0) {
      return {
        message: () => `Accessibility violations found: ${JSON.stringify(violations, null, 2)}`,
        pass: false,
      };
    }
    return {
      pass: true,
    };
  },
});