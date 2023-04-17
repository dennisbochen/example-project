import type { NextApiRequest, NextApiResponse } from 'next';
import { getPerson } from '~/lib/swapi';
import { getRandomNumber } from '~/utilities/getRandomNumber';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const person = await getPerson(getRandomNumber(1, 82)); // there are 82 people in the Star Wars universe according to SWAPI

  res.status(200).json(person);
}
