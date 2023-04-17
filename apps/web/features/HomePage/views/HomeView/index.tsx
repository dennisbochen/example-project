import Link from 'next/link';
import { Button } from '@demo/ui';
import { Hero } from '../../components/Hero';

type HomeViewProps = {
  messages: Record<string, any>;
};

export const HomeView = ({ messages }: HomeViewProps) => (
  <Hero
    headline={messages.headline}
    subline={messages.subline}
    ctaComponent={
      <Link href={messages.languageSwitchHref}>
        <Button>{messages.languageSwitchLabel}</Button>
      </Link>
    }
  />
);
