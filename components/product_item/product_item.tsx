import styles from './ProductItem.module.css';
import { FC } from "react";
import LikeButton from "../like_button/like_button";
import { ProductBrief } from '../../models/product';
import { TLink } from '../transition/transition';

interface ProductItemProps {
  product: ProductBrief
}

const ProductItem: FC<ProductItemProps> = ({product}) => {
  return (
    <article className={styles.product_item}>
      <div className={styles.product_item__header}>
        <TLink href={`/product/${product.id}`}> 
          <div className={`${styles.product_item__image} ${styles.box}`}>
            <img src={product.image} alt={product.name} />
          </div>
        </TLink>
        <p className={styles.product_item__category}>{product.category}</p>
        <LikeButton className={styles.product_item__favorite} liked={product.isFavorite} />
      </div>

      <div className={styles.product_item__info}>
        <ul>
          <li><TLink href={`/product/${product.id}`}>{product.name}</TLink></li>
          <li>{product.brand}</li>
        </ul>

        <p>${product.price}</p>
      </div>
    </article>
  );
}

const ProductItemShimmer = () => {
  return (
    <article className={styles.product_item_shimmer}>
      <div className={styles.product_item_shimmer__image}>
        <div className={styles.product_item_shimmer__category} />
        <div className={styles.product_item_shimmer__favorite} />
      </div>

      <div className={styles.product_item_shimmer__info}>
        <ul>
          <li><div className={styles.product_item_shimmer__name} /></li>
          <li><div className={styles.product_item_shimmer__brand} /></li>
        </ul>

        <div className={styles.product_item_shimmer__price} />
      </div>
    </article>
  );
}

export { ProductItem, ProductItemShimmer };