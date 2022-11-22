import styles from './Hero.module.css';
import { FC, useEffect, useRef } from "react";
import { useIntl } from 'react-intl';
import DoodleArrow from "../icons/doodle_arrow/doodle_arrow";
import DemoIcon from "../icons/demo_icon/demo_icon";
import CounterItem from "../counter/counter";
import { gsap } from 'gsap';
import ExploreImageWithRoundText from '../icons/explore_image_with_round_text/explore_image_with_round_text';

const Hero: FC = () => {
  const intl = useIntl();
  const introRef = useRef<HTMLDivElement>(null);
  const picRef = useRef<HTMLDivElement>(null);

  const counters: {
    collections: {
      subtitle: string,
      count: string
    },
    users: {
      subtitle: string,
      count: string
    }
  } = JSON.parse(intl.formatMessage({ id: 'hero.counters' }));

  useEffect(() => {
    const q = gsap.utils.selector(introRef.current);

    if (introRef.current) {
      gsap.fromTo(q('.hero__intro--anim'), {
        y: '5rem',
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        delay: 3,
        duration: .5,
        stagger: .1,
        ease: 'power2.out'
      });
    }

    if (picRef.current) {
      gsap.fromTo(picRef.current, {
        y: '5rem',
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 3
      })
    }
  });

  return (
    <section className={styles.hero}>
      <div ref={introRef} className={styles.hero__intro}>
        <p className={`${styles.hero__caption} hero__intro--anim`}>
          { intl.formatMessage({ id: 'hero.caption' }) }
        </p>

        <h1 className={styles.hero__title}>
          <span className='hero__intro--anim'>
            { intl.formatMessage({ id: 'hero.title.line1' }) }
          </span>

          <span className='hero__intro--anim'>
            { intl.formatMessage({ id: 'hero.title.line2' }) }
            <DoodleArrow />
          </span>
          
          <span className='hero__intro--anim'>
            { intl.formatMessage({ id: 'hero.title.line3.word1' }) } <span className={styles.hero__title__gradient}>{ intl.formatMessage({ id: 'hero.title.line3.word2' }) }</span>
          </span>
        </h1>

        <p className={`${styles.hero__subtitle} hero__intro--anim`}>
          { intl.formatMessage({ id: 'hero.subtitle' }) }
        </p>

        <div className={`${styles.hero__buttons} hero__intro--anim`}>
          <button className={styles.hero__explore_button}>
            { intl.formatMessage({ id: 'hero.button.explore' }) }
          </button>

          <div className={styles.hero__demo_button}>
            <DemoIcon />

            <p>{ intl.formatMessage({ id: 'hero.button.demo' }) }</p>
          </div>
        </div>

        <div className={`${styles.hero__counters} hero__intro--anim`}>
          <CounterItem
            title={counters.collections.count}
            subtitle={counters.collections.subtitle} />

          <div className={styles.hero__counters__divider} />

          <CounterItem
            title={counters.users.count}
            subtitle={counters.users.subtitle} />
        </div>
      </div>

      <div ref={picRef} className={styles.hero__picture}>
        <img src={`/images/hero_image_${intl.locale}.png`} alt='Hero Image' />

        <div className={styles.hero__picture__explore}>
          <ExploreImageWithRoundText />
        </div>
      </div>
    </section>
  );
}

export default Hero;