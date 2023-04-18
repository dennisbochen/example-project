import baseConfig from '@demo/next-config';

const nextConfig = {
  ...baseConfig,
  env: {
    API_URL: process.env.GRAPHQL_API_URL || 'http://localhost:3001/api/graphql',
  },
};

export default nextConfig;
