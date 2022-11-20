import { FC } from 'react';
import { useIntl } from 'react-intl';
import LoadingState from '../../models/loading_state';
import { ProductBrief } from '../../models/product';
import ProductsList from '../products_list/products_list';
import styles from './SimilarProducts.module.css';

interface SimilarProductsProps {
  category: string,
  products: ProductBrief[]
}

const SimilarProducts: FC<SimilarProductsProps> = ({category, products}) => {
  const intl = useIntl();

  return (
    <section className={styles.main}>
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