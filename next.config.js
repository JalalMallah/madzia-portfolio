/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['latin', 'latin-ext'],
        },
      },
    ],
  },
};

module.exports = nextConfig;
