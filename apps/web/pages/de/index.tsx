import { GetStaticProps } from 'next';
import { HomeView, useHomePage } from '~/features/HomePage';

type HomePageProps = {
  messages: Record<string, string>;
};

export default function HomePage({ messages }: HomePageProps) {
  return <HomeView messages={messages} />;
}

export const getStaticProps: GetStaticProps<{
  messages: Record<string, any>;
}> = async () => {
  // ⚠️ hardcoded for demo brevity
  const lng = 'de';

  const { messages } = await useHomePage({ lng });

  return {
    props: {
      messages,
    },
  };
};
