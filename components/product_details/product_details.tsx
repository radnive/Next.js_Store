import { FC, useEffect, useRef } from 'react';
import styles from './ProductDetails.module.css';
import { useIntl } from 'react-intl';
import { gsap } from 'gsap';
import ColorSelector from '../color_selector/color_selector';
import Spacer from '../spacer/spacer';
import SizeSelector from '../size_selector/size_selector';
import LikeButton from '../like_button/like_button';
import ShareButton from '../share_button/share_button';
import FullScreenButton from '../full_screen_button/full_screen_button';
import { TLink } from '../transition/transition';
interface ProductDetailsProps {
  product: {
    id: string,
    name: string,
    price: number,
    image: string,
    category: string,
    brand: string,
    colors: string[],
    sizes: string[],
    isFavorite: boolean
  }
}

const ProductDetails: FC<ProductDetailsProps> = ({product}) => {
  const intl = useIntl();  
  const mainRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const tl = timeline.current;

    tl?.fromTo(mainRef.current,
      {
        y: '5rem',
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        delay: 3,
        duration: .5
      }
    );

    tl?.fromTo('#product_details__image',
      {
        scale: 1.12
      },
      {
        scale: 1,
        duration: 2,
        ease: 'power4.out'
      },
      '<10%'
    );

    tl?.fromTo(
      [
        ...Array.of(headerRef.current?.childNodes),
        ...Array.of(footerRef.current?.childNodes)
      ],
      {
        y: '5rem',
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: .5,
        stagger: .05,
        ease: 'power2.out',
      },
      '<10%'
    );
  }, [mainRef]);

  return (
    <section ref={mainRef} className={styles.main}>
      <div className={styles.image_container}>
        <img
          id='product_details__image'
          className={styles.image}
          src={product.image}
          alt={product.name}
          lang={intl.locale} />

          <ShareButton className={styles.share_button} lang={intl.locale} />
          <FullScreenButton src={product.image} className={styles.full_screen_button} lang={intl.locale} />
      </div>

      <div className={styles.details_container}>
        <div className={styles.details}>
          <header ref={headerRef}>
            <ul className={styles.details__direction}>
              <li className={styles.details__direction__link}>
                <TLink href='/'>{ intl.formatMessage({ id: 'product.details.home' }) }</TLink>
              </li>

              <li>{'>'}</li>

              <li className={styles.details__direction__link}>{ product.category }</li>

              <li>{'>'}</li>

              <li className={styles.details__direction__link}>{ product.brand }</li>
            </ul>

            <h1 className={styles.details__name}>{product.name}</h1>
          </header>

          <footer ref={footerRef}>
            <ColorSelector colors={product.colors} />

            {
              (product.sizes.length > 0)?
              (
                <>
                  <Spacer height='2rem' />
                  <SizeSelector sizes={product.sizes} />
                </>
              ) : ''
            }

            <div className={styles.buttons}>
              <button className={styles.buttons__purchase}>
                { intl.formatMessage({ id: 'button.purchase.text' }) }
                <b>${ product.price }</b>
              </button>

              <LikeButton className={styles.buttons__like_button} liked={product.isFavorite} />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;