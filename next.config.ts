import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        domains: ['i5.walmartimages.com', 'example.com']
    }
};


const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
