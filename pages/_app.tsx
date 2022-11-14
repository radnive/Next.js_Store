import '../styles/fonts.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import en from '../lang/en.json';
import fa from '../lang/fa.json';
const messages = { en, fa };

const getDirection = (locale: string) => (locale === 'en')? 'ltr' : 'rtl';

export default function App({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale as keyof typeof messages]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}
