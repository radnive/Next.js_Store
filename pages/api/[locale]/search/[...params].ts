import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllProducts, ApiResponse, sliceArray } from '../../../../models/products_list';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | { message: string }>
) {
  // Get params
  const locale = req.query.locale;
  const params = (req.query.params as Array<string>);

  if(params.length >= 2) {
    const allProducts = getAllProducts(locale);
    const query = params[0];
    const pageIndex = Number.parseInt(params[1]);

    if(query !== undefined && pageIndex !== undefined) {

      const searchResult = allProducts.filter(p =>
        p.name.toLowerCase().includes(query)
        || p.details.brand.toLowerCase().includes(query)
        || p.details.category.toLowerCase().includes(query)
      );

      res.status(200).send(sliceArray(searchResult, pageIndex));

    } else {
      // Send error message.
      res.status(404).send({ message: 'url is not valid :(' });
    }
  
  } else {
    // Send error message.
    res.status(404).send({ message: 'url is not valid :(' });
  }
}