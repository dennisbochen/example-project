import { GraphQLClient } from 'graphql-request';

const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL || '';

export const gqlClient = new GraphQLClient(GRAPHQL_API_URL);
