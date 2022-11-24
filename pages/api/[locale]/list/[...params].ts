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
    const category = params[0];
    const pageIndex = Number.parseInt(params[1]);

    if(category != undefined && pageIndex != undefined) {
      switch (category) {

        case 'everything': {
          res.status(200).send(sliceArray(allProducts, pageIndex));
          break;
        }

        default: {
          const filterCategory = allProducts.filter((p) => p.types.includes(category));
          res.status(200).send(sliceArray(filterCategory, pageIndex));
          break;
        }

      }
      
    } else {
      // Send error message.
      res.status(404).send({ message: 'url is not valid :(' });
    }

  } else {
    // Send error message.
    res.status(404).send({ message: 'url is not valid :(' });
  }
}
