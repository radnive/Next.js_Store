import styles from './Footer.module.css';
import { FC } from "react";
import SocialMedias from "../icons/social_medias/social_medias";
import { useIntl } from 'react-intl';
import { TLink } from '../transition/transition';

const Footer: FC = () => {
  const intl = useIntl();
  
  const getInTouchLinks: {
    title: string,
    feedback: string,
    greeting: string
  } = JSON.parse(intl.formatMessage({ id: 'footer.links.getInTouch' }))

  const links: Array<{
    title: string,
    items: Array<{
      name:string,
      href: string
    }>
  }> = Array.of(
    JSON.parse(intl.formatMessage({ id: 'footer.links.products' })),
    JSON.parse(intl.formatMessage({ id: 'footer.links.aboutUs' })),
    JSON.parse(intl.formatMessage({ id: 'footer.links.resources' }))
  );

  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__main}>
        <div className={styles.footer__title}>
          <TLink href='/'>
            <h1>{ intl.formatMessage({ id: 'app.name' }) }</h1>
          </TLink>
          
          <ul>
            <li><a data-style="link">{ intl.formatMessage({ id: 'footer.developer' }) }</a></li>
            <li>{ intl.formatMessage({ id: 'footer.copyright' }) }</li>
            <li>
              <a href='#terms_of_service' data-style="link">{ intl.formatMessage({ id: 'footer.termsOfService' }) }</a>
              <span>|</span>
              <a href='#privacy_policy' data-style="link">{ intl.formatMessage({ id: 'footer.privacyPolicy' }) }</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer__links}>
          {
            links.map((linksCategory, index) => (
              <ul key={`${linksCategory.title}_#${index}`} className={styles.footer__links_category}>
                <li className={styles.footer__links__title}>{linksCategory.title}</li>
                {
                  linksCategory.items.map((link, index) => (
                    <li key={`${link.name}_#${index}`} className={styles.footer__links__link}>
                      <a href={link.href}  data-style="link">{link.name}</a>
                    </li>
                  ))
                }
              </ul>
            ))
          }

          <div className={styles.footer__get_in_touch}>
            <ul className={styles.footer__links_category}>
              <li className={styles.footer__links__title}>{ getInTouchLinks.title }</li>
              <li className={styles.footer__links__link}>
                <a href='#feedback' data-style="link">{ getInTouchLinks.feedback }</a>
              </li>
              <li className={styles.footer__links__link}>
                <a href='#hear_you' data-style="link">{ getInTouchLinks.greeting }</a>
              </li>
            </ul>

            <SocialMedias />
          </div>
        </div>
      </div>

      <div className={styles.footer__alert}>
        <div className='divider' />
        <p>{ intl.formatMessage({ id: 'footer.alert' }) }</p>
      </div>
    </footer>
  );
}

export default Footer;