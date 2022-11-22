import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useRef } from 'react';
import styles from './Transition.module.css';
import PartialBy from '../../models/PartialBy';
import { useIntl } from 'react-intl';
import CircularLoading from '../circular_loading/circular_loading';
import LogoIcon from '../icons/logo/logo';
import gsap from 'gsap';

interface TLinkProps {
  children: ReactNode | ReactNode[],
  className: string,
  href: string,
  locale: string,
  onClick: () => void
}

type TLinkPropsExludeChildren = PartialBy<TLinkProps, 'children'>;
type TLinkPropsExludeOnClick = PartialBy<TLinkPropsExludeChildren, 'onClick'>;
type TLinkPropsExludeLocale = PartialBy<TLinkPropsExludeOnClick, 'locale'>;
type PartialTLinkProps = PartialBy<TLinkPropsExludeLocale, 'className'>;

interface TransitionProviderProps {
  children: ReactNode
}

export const TransitionProvider: FC<TransitionProviderProps> = ({children}) => {
  const { asPath, locale } = useRouter();
  const intl = useIntl();
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const tl = timeline.current;

    tl?.to([
      '#transition_logo',
      '#transition_name',
      '#transition_loading'
    ],
    {
      opacity: 0,
      delay: 2,
      duration: .5
    });

    tl?.set('#transition_logo', { scale: 0 });
    tl?.set('#transition_name', {
      rotateY: '66deg',
      translateX: '60%'
    });

    tl?.to('.transition_bar_item',
    {
      scaleY: 0,
      duration: .5,
      stagger: .1
    });

    tl?.set('#transition_bars_container', { pointerEvents: 'none' });
  }, [asPath, locale]);

  return (
    <>
      <ul id='transition_bars_container' className={styles.transition_bars_container}>
        { Array.from(Array(8)).map((_, i) => (
            <li key={`bar_item_${i}`} className={`${styles.bar} transition_bar_item`} />
          ))
        }
        
        <li className={styles.logo}>
          <LogoIcon id='transition_logo' />
          <p id='transition_name'>
            { intl.formatMessage({ id: 'app.name' }) }
            <b>{ intl.formatMessage({ id: 'app.domain.suffix' }) }</b>
          </p>
        </li>

        <li id='transition_loading' className={styles.loading}>
          <CircularLoading />
        </li>
      </ul>

      { children }
    </>
  );
}

function getUrlInfo(url: string, locale: string | undefined) {
  const tag = (url.includes('#'))? url.slice(url.lastIndexOf('#'), url.length) : '';

  return {
    asPath: url,
    main: url.replace(tag, ''),
    tag,
    locale
  };
}

export const TLink: FC<PartialTLinkProps> = ({children, className, href, onClick, locale}) => {
  const { asPath, push } = useRouter();
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const timeline = useRef(gsap.timeline());
  const hUrl = getUrlInfo(href, locale); // href
  const cUrl = getUrlInfo(asPath, useRouter().locale); // current

  function handleClick() {
    if (onClick) onClick();

    if (hUrl.main !== cUrl.main) startTransition();
    else if (hUrl.locale && hUrl.locale != cUrl.locale) startTransition();
    else if (hUrl.tag !== cUrl.tag) {
      if (hUrl.asPath.length > cUrl.asPath.length) push(hUrl.asPath);
    }
  }
  
  function startTransition() {
    const tl = timeline.current;
    setTimeout(() => push(href, href, { locale: (locale)? locale : cUrl.locale }), 2000);

    tl?.set('#transition_bars_container', { pointerEvents: 'all' });

    tl?.to('.transition_bar_item',
    {
      scaleY: 1,
      duration: .7,
      stagger: .1,
      ease: 'power2.out'
    });

    tl?.to('#transition_logo',
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: 'elastic.out'
    }, '<60%');

    tl?.to('#transition_name', {
      opacity: 1,
      rotateY: 0,
      translateX: 0,
      ease: 'power4.out',
      duration: .7
    }, '<10%');

    tl?.to('#transition_loading', {
      opacity: 1,
      duration: .5
    }, '<0%');
  }

  return (
    <div
      className={className}
      onClick={handleClick}
      onMouseEnter={() => anchorRef.current?.focus()}
      onMouseLeave={() => anchorRef.current?.blur()}>
        {children}
        <a ref={anchorRef} href={href} style={{ display: 'none' }} />
    </div>
  );
}