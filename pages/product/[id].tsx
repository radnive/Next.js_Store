import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import ProductDetails from "../../components/product_details/product_details";
import ProductSpecifications from "../../components/product_specifications/product_specifications";
import SimilarProducts from "../../components/similar_products/similar_products";
import Spacer from "../../components/spacer/spacer";
import MainLayout from "../../layouts/main/main_layout";
import { ProductInfo } from "../../models/product";
import My404Page from "../404";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({params, locale}) => {
  console.log(locale);
  const res = await fetch(`http://localhost:3000/api/${locale}/info/${params?.id}`);
  const data = await res.json();

  return {
    props: {
      product: (data.isValid)? data.product : {},
      isValid: data.isValid
    }
  };
}

interface ProductInfoProps {
  product: object | ProductInfo,
  isValid: boolean
}

const ProductInfo: NextPage<ProductInfoProps> = ({product, isValid}) => {
  if (isValid) {
    const p = product as ProductInfo;
    return (
      <MainLayout title={p.name} description={p.id}>
        <ProductDetails product={{
          id: p.id,
          name: p.name,
          price: p.price,
          ...p.details
        }} />

        <Spacer height="1rem" />

        <ProductSpecifications product={{
          id: p.id,
          name: p.name,
          price: p.price,
          ...p.specifications
        }} />

        <Spacer height="1rem" />

        {
          (p.similar.length > 0)?
            <SimilarProducts category={p.details.category} products={p.similar} />
          :
            <></>
        }
      </MainLayout>
    );
  } else {
    return <My404Page />
  }
}

export default ProductInfo;