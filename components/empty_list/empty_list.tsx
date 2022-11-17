import styles from "./EmptyList.module.css";
import { FC } from "react";
import { useIntl } from "react-intl";
import Lottie from "react-lottie-player";
import lottieAnimation from '../../public/lottie/sad_empty_box.json';

const EmptyList: FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.main}>
      <div className={styles.lottie_container}>
        <Lottie
          className={styles.lottie}
          animationData={lottieAnimation}
          speed={1}
          play />
      </div>

      <ul className={styles.message}>
        <li className={styles.message__title}>
          { intl.formatMessage({ id: 'empty.list.message.title' }) }
        </li>

        <li className={styles.message__subtitle}>
          { intl.formatMessage({ id: 'empty.list.message.subtitle' }) }
        </li>
      </ul>
    </div>
  );
}

export default EmptyList;