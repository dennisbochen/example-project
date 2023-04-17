import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:3001/api/graphql': {
        // @ts-ignore
        headers: {
          'x-is-debug': true,
        },
      },
    },
  ],
  documents: ['../../**/*.{ts,tsx}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './lib/graphql-codegen/gql/': {
      preset: 'client',
    },
    './lib/graphql-codegen/gql/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;
