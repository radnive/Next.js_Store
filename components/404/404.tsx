import { FC } from 'react';
import Lottie from 'react-lottie-player';
import styles from './404.module.css';
import lottieAnimation from '../../public/lottie/404.json';
import { useIntl } from 'react-intl';
import { TLink } from '../transition/transition';

const Error404: FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.main}>
      <div>
        <Lottie
          className={styles.lottie}
          animationData={lottieAnimation}
          speed={1}
          play />
      </div>

      <ul className={styles.message}>
        <li>
          <h1 className={styles.message__title}>
            { intl.formatMessage({ id: '404.page.message.title' }) }
          </h1>

          <p className={styles.message__subtitle}>
            { intl.formatMessage({ id: '404.page.message.subtitle' }) }
          </p>
        </li>
        <li>
          <TLink href='/' className={styles.message__back_home}>
            { intl.formatMessage({ id: '404.page.button.back' }) }
          </TLink>
        </li>
      </ul>
    </div>
  );
}

export default Error404;