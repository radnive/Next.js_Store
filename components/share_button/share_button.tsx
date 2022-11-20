import { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import DoubleCheckIcon from '../icons/double_check_icon/double_check_icon';
import ShareIcon from '../icons/share_icon/share_icon';
import styles from './ShareButton.module.css';

interface ShareButtonProps {
  className: string,
  lang: string
}

const ShareButton: FC<ShareButtonProps> = ({className, lang}) => {
  const [isCopied, setCopyStatus] = useState(false);
  const intl = useIntl();

  function handleClick() {
    const l = window.location;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(l.href);
    }

    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  }
  
  return (
    <button
      className={`${styles.main} ${className}`}
      lang={lang}
      data-style={(isCopied)? 'copied' : 'normal'}
      onClick={handleClick}>
      {
        (isCopied)?
          <><DoubleCheckIcon /> { intl.formatMessage({ id: 'button.share.copied' }) }</>
          :
          <><ShareIcon /> { intl.formatMessage({ id: 'button.share.text' }) }</>
      }
    </button>
  );
}

export default ShareButton;