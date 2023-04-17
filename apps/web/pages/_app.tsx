import type { AppProps } from 'next/app';

import { Open_Sans } from 'next/font/google';
import QueryClientProvider from '~/lib/react-query';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

// Base TailwindCSS styles
import '~/lib/tailwindcss/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${openSans.variable} font-sans w-full min-h-screen`}>
      <QueryClientProvider>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  );
}
