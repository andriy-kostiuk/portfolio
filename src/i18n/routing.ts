import { defineRouting } from 'next-intl/routing';

const locales = ['en', 'uk'] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
});
