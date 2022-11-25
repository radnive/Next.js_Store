import { FC, ReactElement } from "react";
import styles from './MainLayout.module.css';
import Head from "next/head";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useRouter } from "next/router";

interface MainLayoutProps {
  title: string,
  description: string,
  children: ReactElement | ReactElement[]
}

const MainLayout: FC<MainLayoutProps> = ({children, title, description}) => {
  const { locale } = useRouter();
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={`/icons/favicon${(locale === 'en')? '' : '_fa'}.png`} />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/fa" hrefLang="fa" />
      </Head>

      <Header />

      <main className={`container ${styles.main}`}>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;