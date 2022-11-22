import { FC, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import ChevronIcon from '../icons/chevron_icon/chevron_icon';
import styles from './ProductSpecifications.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface ProductSpecificationsProps {
  product: {
    id: string,
    name: string,
    price: number,
    explanation: string,
    features: string[]
  }
}

const ProductSpecifications: FC<ProductSpecificationsProps> = ({product}) => {
  const intl = useIntl();
  const mainRef = useRef<HTMLElement>(null);
  const [isShow, setShowStatus] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      [
        mainRef.current,
        ...Array.of(mainRef.current?.childNodes)
      ],
      {
        y: '5rem',
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: .5,
        stagger: .1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top 70%',
          toggleActions: 'play resume resume resume'
        }
      }
    );
  }, [mainRef]);

  return (
    <section ref={mainRef} className={styles.main}>
      <h2 className={styles.title}>{ product.name }</h2>

      <div className='divider' />

      <div className={`${styles.info} ${(isShow)? '' : styles.info____show_less}`}>
        <p className={styles.info__explanation}>{ product.explanation }</p>

        <ul className={styles.info__features}>
          {
            product.features.map((f, i) => (
              <li key={`feature_${i}`}>{f}</li>
            ))
          }
        </ul>
      </div>

      <div className={`${styles.second_divider} divider`} />

      <button
        className={styles.show_more_button}
        data-button-style={(isShow)? 'less' : 'more'}
        onClick={() => setShowStatus(!isShow)}>
        <ChevronIcon flipX={isShow} />
        { intl.formatMessage({ id: `button.show.${(isShow)? 'less' : 'more'}` }) }
      </button>

      <button className={styles.purchase_button}>
        { intl.formatMessage({ id: 'button.purchase.text' }) }
        <b>${ product.price }</b>
      </button>
    </section>
  );
}

export default ProductSpecifications;