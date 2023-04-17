import { QueryResolvers } from '~/lib/graphql-codegen/gql/resolvers-types';
import { getPerson } from '~/lib/swapi';
import { getRandomNumber } from '~/utilities/getRandomNumber';

export const getRandomPerson: QueryResolvers['getRandomPerson'] = async (
  _,
  args
) => {
  try {
    const person = await getPerson(getRandomNumber(1, 82)); // there are 82 people in the Star Wars universe according to SWAPI

    return {
      name: person?.name,
      birthYear: person?.birth_year,
      hairColor: person?.hair_color,
      height: person?.height,
      homeworld: person?.homeworld,
      eyeColor: person?.eye_color,
      created: person?.created,
      edited: person?.edited,
    };
  } catch (error: any) {
    // usually you would log this error to a service like Sentry or with a custom logger like Winston/Pino
    console.error({
      msg: error.message,
      meta: { args, resolver: 'getRandomPerson' },
    });
    throw new Error('Something went wrong.');
  }
};
