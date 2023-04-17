import { GetStaticProps } from 'next';
import { GetStarWarsConsoleDataQuery } from '~/../api/lib/graphql-codegen/gql/graphql';
import { HomeView, getHomePageData } from '~/features/HomePage';

type HomePageProps = {
  messages: Record<string, string>;
  starWarsConsoleData: GetStarWarsConsoleDataQuery;
};

export default function HomePage({
  messages,
  starWarsConsoleData,
}: HomePageProps) {
  return (
    <HomeView messages={messages} starWarsConsoleData={starWarsConsoleData} />
  );
}

export const getStaticProps: GetStaticProps<{
  messages: Record<string, any>;
}> = async () => {
  // ⚠️ hardcoded for demo brevity
  const lng = 'en';

  const { messages, starWarsConsoleData } = await getHomePageData({ lng });

  return {
    props: {
      messages,
      starWarsConsoleData,
    },
  };
};
