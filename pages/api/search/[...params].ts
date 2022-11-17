import type { NextApiRequest, NextApiResponse } from 'next';
import { allProducts, ApiResponse, sliceArray } from '../../../models/products_list';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | { message: string }>
) {
  // Get params
  const params = (req.query.params as Array<string>);

  if(params.length >= 2) {
    const query = params[0];
    const pageIndex = Number.parseInt(params[1]);

    if(query !== undefined && pageIndex !== undefined) {

      const searchResult = allProducts.filter(p =>
        p.name.toLowerCase().includes(query)
        || p.brand.toLowerCase().includes(query)
        || p.category.toLowerCase().includes(query)
      );

      setTimeout(() => res.status(200).send(sliceArray(searchResult, pageIndex)), 3000);

    } else {
      // Send error message.
      setTimeout(() => res.status(404).send({ message: 'url is not valid :(' }), 3000);
    }
  
  } else {
    // Send error message.
    setTimeout(() => res.status(404).send({ message: 'url is not valid :(' }), 3000);
  }
}