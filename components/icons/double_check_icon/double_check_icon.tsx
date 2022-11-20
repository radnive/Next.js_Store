import { FC } from 'react';
import styles from './DoubleCheckIcon.module.css';

const DoubleCheckIcon: FC = () => {
  return (
    <svg className={styles.main} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.602 13.7595L13.014 15.1715L21.48 6.70552L22.894 8.11952L13.014 17.9995L6.65 11.6355L8.064 10.2215L10.189 12.3465L11.602 13.7585V13.7595ZM11.604 10.9315L16.556 5.97852L17.966 7.38852L13.014 12.3415L11.604 10.9315ZM8.777 16.5865L7.364 17.9995L1 11.6355L2.414 10.2215L3.827 11.6345L3.826 11.6355L8.777 16.5865V16.5865Z" />
    </svg>
  );
}

export default DoubleCheckIcon;