import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductInfo } from '../../../../models/product';
import { getAllProducts, summarize, getSampleSpecifications } from '../../../../models/products_list';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    product: ProductInfo | object,
    isValid: boolean
  }>
) {
  const locale = req.query.locale;
  const id = req.query.id;

  const allProducts = getAllProducts(locale);
  const filteredProducts = allProducts.filter(p => p.id === id);

  if(filteredProducts.length > 0) {
    const product = filteredProducts[0];
    product.specifications = getSampleSpecifications(locale);
    product.similar = allProducts
      .filter(p => p.id != product.id && p.details.category === product.details.category)
      .map(p => summarize(p))
      .sort(() => (Math.random() * 10) - 5) // Shuffle array
      .slice(0, 4);

    res.status(200).send({
      product: product,
      isValid: true
    });
  } else {
    res.status(200).send({
      product: {},
      isValid: false
    });
  }
}