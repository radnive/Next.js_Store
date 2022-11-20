import Link from 'next/link';
import { FC } from 'react';
import FullScreenIcon from '../icons/full_screen_icon/full_screen_icon';
import styles from './FullScreenButton.module.css';

interface FullScreenButtonProps {
  className: string
  lang: string,
  src: string
}

const FullScreenButton: FC<FullScreenButtonProps> = ({className, lang, src}) => {
  return (
    <Link
      href={src}
      className={`${styles.main} ${className}`}
      lang={lang}
      target='_blank'>
      
      <FullScreenIcon />

    </Link>
  );
}

export default FullScreenButton;