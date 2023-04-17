// ideally this would be in a shared folder, but for the sake of this example, it's here
import { graphql } from '@/apps/api/lib/graphql-codegen/gql';
import { gqlClient } from '~/lib/graphql-request';

/* USAGE

Server Components: 
const user = await queryUser({ id: 'some-id-1234' });

Client Components: 
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => queryUser({ id: 'some-id-1234' }),
  });
*/

const getStarWarsConsoleDataDocument = graphql(`
  query getStarWarsConsoleData {
    getRandomPerson {
      name
      birthYear
      eyeColor
      hairColor
      height
    }
  }
`);

export const getStarWarsConsoleData = async () => {
  try {
    const { getRandomPerson } = await gqlClient.request(
      getStarWarsConsoleDataDocument
    );
    return { getRandomPerson };
  } catch (error) {
    console.error(error);
  }
};
