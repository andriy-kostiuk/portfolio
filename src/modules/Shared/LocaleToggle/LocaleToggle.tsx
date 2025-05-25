import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react';

export const LocaleToggle = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const newLocale = locale === 'en' ? 'uk' : 'en';

  const basePath = pathname.replace(`/${locale}`, '') || '/';

  return (
    <Link href={basePath} locale={newLocale}>
      {newLocale.toUpperCase()}
    </Link>
  );
};
