import path from 'path';

const baseConfig = {
  // always transpile local libraries
  transpilePackages: ['@demo/ui', '@demo/i18n-next'],
  // resolve ~ as home directory like in tsconfig
  webpack: (config) => {
    // Important: return the modified config
    config.resolve.alias = {
      ...config.resolve.alias,
      // your aliases
      '~': path.resolve(process.cwd(), './'),
    };
    return config;
  },
};

export default baseConfig;
