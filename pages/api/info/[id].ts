import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductInfo } from '../../../models/product';
import { allProducts, summarize } from '../../../models/products_list';

const sampleSpecifications = {
  explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Magna eget est lorem ipsum. Interdum posuere lorem ipsum dolor sit amet. Nec sagittis aliquam malesuada bibendum arcu. Est lorem ipsum dolor sit amet. Aliquet nibh praesent tristique magna sit amet. Et netus et malesuada fames. Tortor consequat id porta nibh venenatis cras sed. Lorem sed risus ultricies tristique nulla aliquet enim. Hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam ut venenatis tellus in. Fames ac turpis egestas maecenas pharetra. Lobortis mattis aliquam faucibus purus in massa. Amet commodo nulla facilisi nullam vehicula. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Tortor consequat id porta nibh venenatis cras sed. Sem nulla pharetra diam sit amet. Urna id volutpat lacus laoreet non curabitur gravida arcu. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Ac feugiat sed lectus vestibulum mattis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Egestas dui id ornare arcu odio ut sem nulla. Sed viverra ipsum nunc aliquet bibendum enim. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. In metus vulputate eu scelerisque.\n\nCursus turpis massa tincidunt dui. Enim nunc faucibus a pellentesque sit amet. Arcu risus quis varius quam quisque id diam. Ac placerat vestibulum lectus mauris ultrices eros. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Non nisi est sit amet facilisis magna etiam tempor. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Risus nullam eget felis eget nunc lobortis mattis. Bibendum enim facilisis gravida neque convallis a. Duis tristique sollicitudin nibh sit. Semper quis lectus nulla at volutpat diam ut. Est lorem ipsum dolor sit amet. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. At varius vel pharetra vel. Lobortis scelerisque fermentum dui faucibus in ornare. Risus sed vulputate odio ut enim blandit volutpat maecenas:",
  features: [
    "Arcu cursus euismod quis viverra nibh cras.",
    "Eget nunc lobortis mattis aliquam. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.",
    "Hendrerit dolor magna eget est lorem ipsum dolorsit amet!",
    "Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
    "Nibh venenatis cras sed felis eget velit aliquet sagittis.",
    "Posuere ac ut consequat semper. Condimentum mattis pellentesque id nibh tortor id aliquet lectus.",
    "Laoreet suspendisse interdum consectetur libero.",
    "Volutpat consequat mauris nunc congue nisi. Lacus vel facilisis volutpat est velit egestas dui."
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    product: ProductInfo | object,
    isValid: boolean
  }>
) {
  const id = req.query.id;

  const filteredProducts = allProducts.filter(p => p.id === id);

  if(filteredProducts.length > 0) {
    const product = filteredProducts[0];
    product.specifications = sampleSpecifications;
    product.similar = allProducts
      .filter(p => p.details.category === product.details.category)
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