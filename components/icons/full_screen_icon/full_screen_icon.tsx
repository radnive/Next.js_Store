import { FC } from 'react';
import styles from './FullScreenIcon.module.css';

const FullScreenIcon: FC = () => {
  return (
    <svg className={styles.main} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path data-name='top-left' d="M3 3H9V5H5V9H3V3Z" />
      <path data-name='top-right' d="M15 3H21V9H19V5H15V3Z" />
      <path data-name='bottom-right' d="M19 19V15H21V21H15V19H19Z" />
      <path data-name='bottom-left' d="M5 19H9V21H3V15H5V19Z" />
    </svg>
  );
}

export default FullScreenIcon;