import { FC } from 'react';
import styles from './ShareIcon.module.css';

const ShareIcon: FC = () => {
  return (
    <svg className={styles.main} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2.05V4.062C8.98271 4.31868 7.13885 5.33387 5.84319 6.90122C4.54752 8.46857 3.89728 10.4705 4.02462 12.5C4.15196 14.5296 5.04733 16.4345 6.52874 17.8276C8.01016 19.2207 9.96645 19.9975 12 20C13.9486 20 15.8302 19.2888 17.2917 18C18.7533 16.7112 19.6942 14.9333 19.938 13H21.951C21.449 18.053 17.185 22 12 22C6.477 22 2 17.523 2 12C2 6.815 5.947 2.551 11 2.05V2.05ZM18.707 6.707L12 13.414L10.586 12L17.293 5.293L14 2H22V10L18.707 6.707Z" />
    </svg>
  );
}

export default ShareIcon;