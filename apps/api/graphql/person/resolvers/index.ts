import { Resolvers } from '~/lib/graphql-codegen/gql/resolvers-types';
import { getRandomPerson } from './getRandomPerson';

export const resolvers: Resolvers = {
  Query: {
    getRandomPerson,
  },
};
