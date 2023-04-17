import { isAuthenticated } from '~/utilities/isAuthenticated';

export const resolversComposition = {
  'Query.getPerson': [isAuthenticated()],
};
