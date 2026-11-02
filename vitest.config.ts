import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: [
      'admin/src/**/*.test.ts',
      'admin/src/**/*.spec.ts',
      'server/src/**/*.test.ts',
      'server/src/**/*.spec.ts',
    ],
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'html', 'lcov'],
      include: ['admin/src/**/*.{ts,tsx}', 'server/src/**/*.ts'],
    },
  },
});
