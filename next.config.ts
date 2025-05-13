import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: ` @use '@/styles/abstracts/index.scss' as *;`,
  },
};

export default nextConfig;
