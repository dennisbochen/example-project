import type { NextApiRequest, NextApiResponse } from 'next';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

// GraphQL Partials
import person from '~/graphql/person';

const typeDefs = [person.typeDefs];

const resolvers = [person.resolvers];

const resolversComposition = {
  ...person.resolversComposition,
};

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(typeDefs),
  // TODO: fix this type error
  // @ts-ignore
  resolvers: composeResolvers(mergeResolvers(resolvers), resolversComposition),
});

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
  schema,
  cors: false,
});
