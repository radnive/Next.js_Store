import type { NextApiRequest, NextApiResponse } from 'next';
import { allProducts, ApiResponse, sliceArray } from '../../../models/products_list';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | { message: string }>
) {
  // Get params
  const params = (req.query.params as Array<string>);

  if(params.length >= 2) {
    const category = params[0];
    const pageIndex = Number.parseInt(params[1]);

    if(category != undefined && pageIndex != undefined) {
      switch (category) {

        case 'everything': {
          setTimeout(() => res.status(200).send(sliceArray(allProducts, pageIndex)), 3000);
          break;
        }

        default: {
          const filterCategory = allProducts.filter((p) => p.type.includes(category));
          setTimeout(() => res.status(200).send(sliceArray(filterCategory, pageIndex)), 3000);
          break;
        }

      }
      
    } else {
      // Send error message.
      setTimeout(() => res.status(404).send({ message: 'url is not valid :(' }), 3000);
    }

  } else {
    // Send error message.
    setTimeout(() => res.status(404).send({ message: 'url is not valid :(' }), 3000);
  }
}
