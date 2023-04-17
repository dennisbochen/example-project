import Link from 'next/link';
import { Button } from '@demo/ui';
import { Page } from '../../components/Page';
import { ConnectedStarWarsConsole } from '~/features/StarWarsConsole';
import { GetStarWarsConsoleDataQuery } from '@/apps/api/lib/graphql-codegen/gql/graphql';

type HomeViewProps = {
  messages: Record<string, any>;
  starWarsConsoleData: GetStarWarsConsoleDataQuery;
};

const REST_API_URL = process.env.REST_API_URL || '';
const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL || '';

export const HomeView = ({ messages, starWarsConsoleData }: HomeViewProps) => (
  <Page
    headline={messages.headline}
    subline={messages.subline}
    ctaComponent={
      <Link href={messages.languageSwitchHref}>
        <Button>{messages.languageSwitchLabel}</Button>
      </Link>
    }
    consoleComponent={
      <ConnectedStarWarsConsole initialData={starWarsConsoleData} />
    }
    apiLinksComponent={
      <>
        <a href={REST_API_URL} target="_blank">
          {messages.restApiLinkLabel}
        </a>
        <a href={GRAPHQL_API_URL} target="_blank">
          {messages.graphqlApiLinkLabel}
        </a>
      </>
    }
  />
);
