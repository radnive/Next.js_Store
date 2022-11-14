import { useIntl } from 'react-intl';
import MainLayout from '../layouts/main/main_layout';

export default function Home() {
  const intl = useIntl();

  return (
    <MainLayout
      title={intl.formatMessage({ id: 'app.name' })}
      description={intl.formatMessage({ id: 'app.description' })}>

    </MainLayout>
  );
}
