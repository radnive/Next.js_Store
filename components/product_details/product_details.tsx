import { FC } from 'react';
import styles from './ProductDetails.module.css';
import { useIntl } from 'react-intl';
import ColorSelector from '../color_selector/color_selector';
import Spacer from '../spacer/spacer';
import SizeSelector from '../size_selector/size_selector';
import LikeButton from '../like_button/like_button';
import Link from 'next/link';
import ShareButton from '../share_button/share_button';
import FullScreenButton from '../full_screen_button/full_screen_button';

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

  return (
    <div className={styles.main}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={product.image}
          alt={product.name}
          lang={intl.locale} />

          <ShareButton className={styles.share_button} lang={intl.locale} />
          <FullScreenButton src={product.image} className={styles.full_screen_button} lang={intl.locale} />
      </div>

      <div className={styles.details}>
        <header>
          <ul className={styles.details__direction}>
            <li className={styles.details__direction__link}>
              <Link href='/'>{ intl.formatMessage({ id: 'product.details.home' }) }</Link>
            </li>

            <li>{'>'}</li>

            <li className={styles.details__direction__link}>{ product.category }</li>

            <li>{'>'}</li>

            <li className={styles.details__direction__link}>{ product.brand }</li>
          </ul>

          <h1 className={styles.details__name}>{product.name}</h1>
        </header>

        <footer>
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
              { intl.formatMessage({ id: 'product.details.button.purchase' }) }
              <b>${ product.price }</b>
            </button>

            <LikeButton className={styles.buttons__like_button} liked={product.isFavorite} />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ProductDetails;