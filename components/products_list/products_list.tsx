import styles from './ProductsList.module.css';
import { FC } from "react";
import { ProductBrief } from '../../models/product';
import LoadingState from '../../models/loading_state';
import { ProductItem, ProductItemShimmer } from "../product_item/product_item";
import EmptyList from '../empty_list/empty_list';

interface ProductsListProps {
  loadingState: LoadingState,
  productsList: Array<ProductBrief>
}

const ProductsList: FC<ProductsListProps> = ({loadingState, productsList}) => {
  if (loadingState === LoadingState.loading) {
    return getShimmerListItems();
  } else if (productsList.length === 0) {
    return <EmptyList />;
  } else {
    return getProductListItems(productsList);
  }
}

const getShimmerListItems = () => {
  return (<div className={styles.products_list}>
    { Array.from(Array(8)).map((_, index) => <ProductItemShimmer key={`shimmer_item_${index}`} />) }
  </div>);
}

const getProductListItems = (productsList: Array<ProductBrief>) => {
  return (<div className={styles.products_list}>
    { productsList.map((item, index) => <ProductItem key={`${item.id}_${index}`} product={item} />) }
  </div>)
}

export default ProductsList;