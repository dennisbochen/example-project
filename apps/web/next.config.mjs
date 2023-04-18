import baseConfig from '@demo/next-config';

const nextConfig = {
  ...baseConfig,
  env: {
    GRAPHQL_API_URL:
      process.env.GRAPHQL_API_URL || 'http://localhost:3001/api/graphql',
    REST_API_URL:
      process.env.REST_API_URL ||
      'http://localhost:3001/api/rest/person/random',
  },
};

export default nextConfig;
