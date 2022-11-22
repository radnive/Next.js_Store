import styles from './Header.module.css';
import { FC, useEffect, useRef, useState } from "react";
import { useIntl } from 'react-intl';
import { gsap } from 'gsap';
import MenuButton from "../menu_button/menu_button";
import SettingsModal from "../settings_modal/settings_modal";
import SearchIcon from "../icons/search_icon/search_icon";
import { TLink } from '../transition/transition';

const Header: FC = () => {
  const intl = useIntl();
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setMenuState] = useState(false);
  const [isSettingsModalOpen, setSettingsModalState] = useState(false);

  useEffect(() => {
    gsap.to(headerRef.current, {
      y: 0,
      duration: .5,
      delay: 3,
      ease: 'power3.out'
    });
  });

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${isMenuOpen? styles.header____shadow: ''}`}>

        <div className={`${styles.header__main} container`}>
          <div className={styles.header__top_section}>
            <TLink href='/' className={styles.header__logo}>
              { intl.formatMessage({ id: 'app.name' }) }
            </TLink>

            <MenuButton isOpen={isMenuOpen} setMenuState={setMenuState} />
          </div>

          <div
            ref={menuRef}
            className={styles.header__menu}
            style={(isMenuOpen)? {
              maxHeight: `${menuRef.current?.scrollHeight}px`,
              marginTop: '3rem',
              marginBottom: '1rem'
            } : {}}
          >
            <ul className={styles.header__links}>
              <li>
                <TLink href='/'>
                  { intl.formatMessage({ id: 'header.menu_item.home' }) }
                </TLink>
              </li>
              {
                [
                  intl.formatMessage({ id: 'header.menu_item.collections' }),
                  intl.formatMessage({ id: 'header.menu_item.brands' }),
                  intl.formatMessage({ id: 'header.menu_item.new' }),
                  intl.formatMessage({ id: 'header.menu_item.sales' })
                ].map((item, index) => {
                  return (<li key={`menu_item__${item}__${index}`}>{item}</li>);
                })
              }
            </ul>

            <div className={styles.header__accessibility}>
              <TLink
                className={styles.header__search_box}
                href='/#search_section'
                onClick={() => setMenuState(false)}
              >
                <SearchIcon /> { intl.formatMessage({ id: 'header.search' }) }
              </TLink>

              <div className={styles.header__divider} />

              <div className={styles.header__user_info}>
                <img src='/images/user_profile.png' alt='User Image' />

                <ul>
                  <li>Sara Mahdavi</li>
                  <li>sara@gmail.com</li>
                </ul>
              </div>

              <button
                className={styles.header__settings}
                onClick={() => setSettingsModalState(!isSettingsModalOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.34 16.9998C2.91727 16.2688 2.58866 15.4873 2.362 14.6738C2.85531 14.4229 3.26959 14.0404 3.55903 13.5687C3.84846 13.097 4.00176 12.5544 4.00197 12.0009C4.00218 11.4475 3.84928 10.9048 3.5602 10.4328C3.27112 9.96088 2.85712 9.57809 2.364 9.32682C2.81604 7.69231 3.67673 6.19977 4.865 4.98982C5.32909 5.29155 5.86762 5.45898 6.42098 5.4736C6.97434 5.48822 7.52095 5.34945 8.00033 5.07265C8.47971 4.79586 8.87315 4.39182 9.13713 3.90526C9.4011 3.41871 9.52531 2.8686 9.496 2.31582C11.1381 1.89145 12.8612 1.89213 14.503 2.31782C14.474 2.87059 14.5984 3.42061 14.8626 3.90703C15.1268 4.39345 15.5204 4.7973 15.9998 5.07388C16.4793 5.35047 17.0259 5.48901 17.5793 5.47417C18.1326 5.45934 18.671 5.2917 19.135 4.98982C19.714 5.57982 20.228 6.25082 20.66 6.99982C21.093 7.74882 21.417 8.52982 21.638 9.32582C21.1447 9.57672 20.7304 9.9592 20.441 10.4309C20.1515 10.9027 19.9982 11.4453 19.998 11.9987C19.9978 12.5522 20.1507 13.0949 20.4398 13.5668C20.7289 14.0388 21.1429 14.4216 21.636 14.6728C21.184 16.3073 20.3233 17.7999 19.135 19.0098C18.6709 18.7081 18.1324 18.5407 17.579 18.526C17.0257 18.5114 16.479 18.6502 15.9997 18.927C15.5203 19.2038 15.1268 19.6078 14.8629 20.0944C14.5989 20.5809 14.4747 21.131 14.504 21.6838C12.8619 22.1082 11.1388 22.1075 9.497 21.6818C9.52605 21.1291 9.4016 20.579 9.13742 20.0926C8.87324 19.6062 8.47964 19.2023 8.00017 18.9258C7.5207 18.6492 6.97405 18.5106 6.42073 18.5255C5.8674 18.5403 5.32896 18.7079 4.865 19.0098C4.27399 18.4068 3.76159 17.7314 3.34 16.9998ZM9 17.1958C10.0656 17.8105 10.8668 18.7968 11.25 19.9658C11.749 20.0128 12.25 20.0138 12.749 19.9668C13.1324 18.7977 13.934 17.8113 15 17.1968C16.0652 16.5805 17.3205 16.3793 18.525 16.6318C18.815 16.2238 19.065 15.7888 19.273 15.3338C18.4524 14.4173 17.9991 13.23 18 11.9998C18 10.7398 18.47 9.56282 19.273 8.66582C19.0635 8.21097 18.8125 7.77646 18.523 7.36782C17.3193 7.62013 16.0648 7.4193 15 6.80382C13.9344 6.18919 13.1332 5.20281 12.75 4.03382C12.251 3.98682 11.75 3.98582 11.251 4.03282C10.8676 5.20197 10.066 6.18838 9 6.80282C7.93478 7.41914 6.67948 7.62034 5.475 7.36782C5.18556 7.77611 4.93513 8.21069 4.727 8.66582C5.54757 9.58238 6.00088 10.7696 6 11.9998C6 13.2598 5.53 14.4368 4.727 15.3338C4.93647 15.7887 5.18754 16.2232 5.477 16.6318C6.68072 16.3795 7.93521 16.5803 9 17.1958ZM12 14.9998C11.2044 14.9998 10.4413 14.6838 9.87868 14.1211C9.31607 13.5585 9 12.7955 9 11.9998C9 11.2042 9.31607 10.4411 9.87868 9.8785C10.4413 9.31589 11.2044 8.99982 12 8.99982C12.7956 8.99982 13.5587 9.31589 14.1213 9.8785C14.6839 10.4411 15 11.2042 15 11.9998C15 12.7955 14.6839 13.5585 14.1213 14.1211C13.5587 14.6838 12.7956 14.9998 12 14.9998ZM12 12.9998C12.2652 12.9998 12.5196 12.8945 12.7071 12.7069C12.8946 12.5194 13 12.265 13 11.9998C13 11.7346 12.8946 11.4803 12.7071 11.2927C12.5196 11.1052 12.2652 10.9998 12 10.9998C11.7348 10.9998 11.4804 11.1052 11.2929 11.2927C11.1054 11.4803 11 11.7346 11 11.9998C11 12.265 11.1054 12.5194 11.2929 12.7069C11.4804 12.8945 11.7348 12.9998 12 12.9998Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='divider' />
      </header>

      {(isSettingsModalOpen)? <SettingsModal afterClose={() => setSettingsModalState(false)} /> : ''}
    </>
  );
}

export default Header;