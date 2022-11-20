import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductInfo } from '../../../models/product';
import { allProducts, summarize } from '../../../models/products_list';

const sampleSpecifications = {
  explanation: "A single-piston cam can generate a torque output which can be extended for any length of the engine, such as up to 250 pounds as well as more powerful vehicles with much smaller turbochargers. The motor also carries the ability to increase your power output up to 200 horsepower at idle to provide higher performance while at the same time limiting the power output to just 30 PSI before starting the engine.The two large 6-speed manual switches operate from 3.3 to 4.2 gears. In this mode, the three motor modes have different tuning advantages. At the rear end, the transmission mode is powered by a 4.0 GHz V6 powertrain, whilst at the front are three 4.3 gears for front-wheel drive. The transmission features four 5.3 gb/s sequential transmission, and two standard six disc 6-speed manual transmissions.Four speed manual controls and five automatic braking systems make dual use out of the four speed control switch, whilst the four speed manual switch holds the two rear-wheel-drive and the four front-wheel-drive brake. By adjusting the top speed to 90 MPH, up to 75 MPH at full speed as well as between 20 and 75 mph with the front wheel on the throttle, the rear differential provides a much more comfortable, and quieter, ride. On top of the standard four speed steering, rear-wheel drive rear brake is also available and while it operates. Since most modern Linux distributions offer a default settings menu you can define whatever configuration you want instead of a \"default\" file manager interface. However the default system settings are often too complex and unhelpful to keep you occupied. Therefore, while it might be worth using a more traditional GUI for the default settings instead of having to make a choice on what menu will be open, the GUI isn't worth it in the first place.",
  features: [
    "Lorem",
    "",
    "",
    ""
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