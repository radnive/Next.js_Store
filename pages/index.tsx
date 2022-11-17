import { useIntl } from 'react-intl';
import ExploreProducts from '../components/explore_products/explore_products';
import Hero from '../components/hero/hero';
import Spacer from '../components/spacer/spacer';
import MainLayout from '../layouts/main/main_layout';

export default function Home() {
  const intl = useIntl();

  return (
    <MainLayout
      title={intl.formatMessage({ id: 'app.name' })}
      description={intl.formatMessage({ id: 'app.description' })}>

      <Hero />

      <Spacer height='5rem' />

      <ExploreProducts />

    </MainLayout>
  );
}
