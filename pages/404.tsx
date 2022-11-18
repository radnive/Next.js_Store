import { NextPage } from "next";
import { useIntl } from "react-intl";
import Error404 from "../components/404/404";
import MainLayout from "../layouts/main/main_layout";

const My404Page: NextPage = () => {
  const intl = useIntl();

  return (
    <MainLayout
      title={intl.formatMessage({ id: '404.page.message.title' })}
      description={intl.formatMessage({ id: '404.page.message.subtitle' })}>

      <Error404 />
      
    </MainLayout>
  );
}

export default My404Page;