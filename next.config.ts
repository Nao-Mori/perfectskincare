import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'd14m4ytv3xhrk4.cloudfront.net',
        pathname: '/uploads/**'
      }
    ]
  }
};


const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);