import { FC, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import LoadingState from '../../models/loading_state';
import { ProductBrief } from '../../models/product';
import ProductsList from '../products_list/products_list';
import styles from './SimilarProducts.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface SimilarProductsProps {
  category: string,
  products: ProductBrief[]
}

const SimilarProducts: FC<SimilarProductsProps> = ({category, products}) => {
  const mainRef = useRef<HTMLElement>(null);
  const intl = useIntl();

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
          start: 'top 80%',
          toggleActions: 'play resume resume resume'
        }
      }
    );
  }, [mainRef]);

  return (
    <section ref={mainRef} className={styles.main}>
      <header className={styles.header}>
        <p className={styles.title}>
          { intl.formatMessage({ id: 'product.similar.title' }) }
          <b>{ category }</b>
        </p>

        <p className={styles.see_more_link}>
          { 
            (products.length >= 4)?
              intl.formatMessage({ id: 'product.similar.link.seeMore' })
              :
              ''
          }
        </p>
      </header>

      <ProductsList loadingState={LoadingState.normal} productsList={products} />

      { 
        (products.length >= 4)?
          <button className={styles.see_more_button}>
            { intl.formatMessage({ id: 'product.similar.link.seeMore' }) }
          </button>
          :
          ''
      }
    </section>
  );
}

export default SimilarProducts;