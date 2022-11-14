import styles from './SettingsModal.module.css';
import { FC, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from 'gsap';
import { useTheme } from "next-themes";
import { useIntl } from 'react-intl';
import Link from "next/link";

interface SettingsModalProps {
  afterClose?: () => void
}

const SettingsModal: FC<SettingsModalProps> = ({afterClose}) => {
  const {locale, asPath} = useRouter();

  const {theme, setTheme} = useTheme();
  const intl = useIntl();

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const tabletMediaQuery = window.matchMedia('only screen and (min-width: 680px)');

    timeline.current.to(
      mainContainerRef.current,
      {
        display: 'block',
        opacity: 1,
        delay: 0,
        duration: .15
      }
    ).to(
      modalRef.current,
      (tabletMediaQuery.matches)? {
        opacity: 1,
        scale: 1,
        duration: .5,
        ease: 'elastic.out(1, 0.75)'
      } : {
        translateY: 0,
        duration: .2
      }
    );
  });

  const closeModal = () => {
    timeline.current
      .reverse(.4)
      .then(() => { if(afterClose) { afterClose(); } });
  }

  return (
    <>
      <div
        ref={mainContainerRef}
        className={styles.settings_modal__dark_bg}
        onClick={closeModal} />

      <div ref={modalRef} className={styles.settings_modal}>
        <header className={styles.settings_modal__header}>
          <h1>{ intl.formatMessage({ id: 'settings.modal.title' }) }</h1>
          <p>{ intl.formatMessage({ id: 'settings.modal.subtitle' }) }</p>
        </header>

        <div className='divider' />

        <main className={styles.settings_modal__main}>
          <div className={styles.settings_modal__option_title}>
            <h4>{ intl.formatMessage({ id: 'settings.modal.themes.title' }) }</h4>
            <p>{ intl.formatMessage({ id: 'settings.modal.themes.subtitle' }) }</p>
          </div>

          <div className={styles.settings_modal__themes}>
            <div
              className={styles.settings_modal__theme_option}
              data-selected={theme === 'system'}
              onClick={() => setTheme('system')}
            >
              <img src='/images/system_theme.png' alt={ intl.formatMessage({ id: 'settings.modal.themes.system' }) } />
              <p>{ intl.formatMessage({ id: 'settings.modal.themes.system' }) }</p>
            </div>

            <div
              className={styles.settings_modal__theme_option}
              data-selected={theme === 'light'}
              onClick={() => setTheme('light')}
            >
              <img src='/images/light_theme.png' alt={ intl.formatMessage({ id: 'settings.modal.themes.light' }) } />
              <p>{ intl.formatMessage({ id: 'settings.modal.themes.light' }) }</p>
            </div>

            <div
              className={styles.settings_modal__theme_option}
              data-selected={theme === 'dark'}
              onClick={() => setTheme('dark')}
            >
              <img src='/images/dark_theme.png' alt={ intl.formatMessage({ id: 'settings.modal.themes.dark' }) } />
              <p>{ intl.formatMessage({ id: 'settings.modal.themes.dark' }) }</p>
            </div>
          </div>

          <div className='divider' />

          <div className={styles.settings_modal__languages}>
            <div className={styles.settings_modal__option_title}>
              <h4>{ intl.formatMessage({ id: 'settings.modal.languages.title' }) }</h4>
              <p>{ intl.formatMessage({ id: 'settings.modal.languages.subtitle' }) }</p>
            </div>

            <div className={styles.settings_modal__language_options}>
              <Link href={asPath} locale='fa'>
                <p data-selected={locale === 'fa'}>{ intl.formatMessage({ id: 'settings.modal.languages.persian' }) }</p>
              </Link>
              <Link href={asPath} locale='en'>
                <p data-selected={locale === 'en'}>{ intl.formatMessage({ id: 'settings.modal.languages.english' }) }</p>
              </Link>
            </div>
          </div>

        </main>

        <div className='divider' />

        <div className={styles.settings_modal__buttons}>
          <button onClick={closeModal}>
            { intl.formatMessage({ id: 'settings.modal.close' }) }
          </button>
        </div>
      </div>
    </>
  );
}

export default SettingsModal;