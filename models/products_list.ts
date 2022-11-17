import { ProductBrief } from "./product";

export type ApiResponse = {
  products: ProductBrief[],
  isEndOfList: boolean
}

export function sliceArray(array: ProductBrief[], pageIndex: number) : ApiResponse {
  const endIndex = pageIndex * 8;

  if(endIndex <= array.length) {
    return {
      products: array.slice(endIndex - 8, endIndex),
      isEndOfList: endIndex === array.length
    };
  } else {
    return {
      products: array.slice(endIndex - 8, array.length),
      isEndOfList: endIndex >= array.length
    };
  }
}

export const allProducts: ProductBrief[] = [
  {
    id: 'alkdjsflkajsi324',
    image: '/images/products/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg',
    name: 'Rainbow Sneakers',
    brand: 'Nike',
    price: 90,
    category: 'Shoes',
    type: [
      'popular',
      'hot',
      'recent'
    ],
    isFavorite: false
  },
  {
    id: 'asdf3erew34rdsf',
    image: '/images/products/irene-kredenets-tcVH_BwHtrc-unsplash.jpg',
    name: 'Leather Purse',
    brand: 'Michael Kors',
    price: 50,
    category: 'Bag',
    type: [
      'products',
      'work'
    ],
    isFavorite: true
  },
  {
    id: 'asdfk55d3wrwefsld',
    image: '/images/products/tobias-tullius-Fg15LdqpWrs-unsplash.jpg',
    name: 'Loose Blouse',
    brand: 'TACVASEN',
    price: 70,
    category: 'Blouse',
    type: [
      'hot'
    ],
    isFavorite: false
  },
  {
    id: 'asdlkfjdkfdsf3rwefsd',
    image: '/images/products/mohammad-metri-E-0ON3VGrBc-unsplash.jpg',
    name: 'Funky heels',
    brand: 'Leevar Braided',
    price: 40,
    category: 'Shoes',
    type: [
      'products',
      'popular'
    ],
    isFavorite: true
  },
  {
    id: 'sdkfe3rdslj00dvdsf',
    image: '/images/products/faith-yarn-Wr0TpKqf26s-unsplash.jpg',
    name: 'Black T-shirt',
    brand: 'Gildan',
    price: 20,
    category: 'Shirt',
    type: [
      'work',
      'hot'
    ],
    isFavorite: false
  },
  {
    id: 'ajdsflkjer23r77sdfk',
    image: '/images/products/mediamodifier-TvL5vIgwiwo-unsplash.jpg',
    name: 'White shirt',
    brand: 'Hanes',
    price: 30,
    category: 'Shirt',
    type: [
      'products',
      'popular',
      'recent'
    ],
    isFavorite: true
  },
  {
    id: 'sdf323rfsdfsdt3322sd',
    image: '/images/products/sun-lingyan-_H0fjILH5Vw-unsplash.jpg',
    name: 'Laptop Bag',
    brand: 'Dachee',
    price: 40,
    category: 'Bag',
    type: [
      'work',
      'products'
    ],
    isFavorite: false
  },
  {
    id: 'sdlkfjslj3423fkjsdf',
    image: '/images/products/tamara-bellis-gmw_1R_gAdg-unsplash.jpg',
    name: 'Ripped Jeans',
    brand: 'Genleck',
    price: 20,
    category: 'Jeans',
    type: [
      'popular',
      'recent'
    ],
    isFavorite: true
  },
  {
    id: 'sdfsdfsddd3333edfdf3t00',
    image: '/images/products/adam-birkett-vISNAATFXlE-unsplash.jpg',
    name: 'White Headphone',
    brand: 'Beats',
    price: 490,
    category: 'Headphone',
    type: [
      'hot',
      'products'
    ],
    isFavorite: true
  },
  {
    id: 'asdjflkj34rtq34fdk',
    image: '/images/products/mojtaba-fahiminia-t4g1gctAaKk-unsplash.jpg',
    name: 'Sneakers shoes',
    brand: 'Sneakers',
    price: 27,
    category: 'Shoes',
    type: [
      'recent',
      'hot'
    ],
    isFavorite: false
  },
  {
    id: 'skldjf3r3tro0dsfsda5',
    image: '/images/products/alicia-petresc-BciCcl8tjVU-unsplash.jpg',
    name: 'Not your bae',
    brand: 'Stay Free',
    price: 43,
    category: 'Jeans',
    type: [
      'products',
      'popular'
    ],
    isFavorite: false
  },
  {
    id: 'asldfjdkf33r304994edd',
    image: '/images/products/korie-cull-OmIEij4MhnA-unsplash.jpg',
    name: 'Black Bag',
    brand: 'Louis Vuitton',
    price: 234,
    category: 'Bag',
    type: [
      'work',
      'hot',
      'recent'
    ],
    isFavorite: false
  },
  {
    id: 'dkdkdkd3939949idkd',
    image: '/images/products/usama-akram-kP6knT7tjn4-unsplash.jpg',
    name: 'Nike SuperRep Go',
    brand: 'Nike',
    price: 133,
    category: 'Shoes',
    type: [
      'popular',
      'hot',
      'recent'
    ],
    isFavorite: true
  },
  {
    id: 'kkkkdghdke3d9sdfj349',
    image: '/images/products/cain-beaudoin-eWKmWtHV4pY-unsplash.jpg',
    name: 'Blue Jeans',
    brand: 'Star',
    price: 55,
    category: 'Jeans',
    type: [
      'hot',
      'recent'
    ],
    isFavorite: true
  },
  {
    id: '55kjdfkjdfkjdfjkl',
    image: '/images/products/anomaly-WWesmHEgXDs-unsplash.jpg',
    name: 'White T-Shirt',
    brand: 'Blank & White',
    price: 48,
    category: 'Shirt',
    type: [
      'popular',
      'products',
      'work'
    ],
    isFavorite: true
  },
  {
    id: '33ddddddgdvcxvdfasdfererd',
    image: '/images/products/theregisti-XetpscGVLtg-unsplash.jpg',
    name: 'Macbook pro',
    brand: 'Apple',
    price: 1999,
    category: 'Laptop',
    type: [
      'popular',
      'products',
      'work'
    ],
    isFavorite: true
  },
  {
    id: 'uudjhksdjhfsdjhf8884',
    image: '/images/products/redd-f-jC7nVH_Sw8k-unsplash.jpg',
    name: 'Men’s Fall Fashion',
    brand: 'Brown Star',
    price: 37,
    category: 'Jeans',
    type: [
      'popular',
      'hot',
      'work'
    ],
    isFavorite: true
  },
  {
    id: '133eddfs34435345',
    image: '/images/products/tom-sodoge-3vAdYH9FfG0-unsplash.jpg',
    name: 'Timberland 45th Anniversary',
    brand: 'Black Jeans',
    price: 34,
    category: 'Jeans',
    type: [
      'recent',
      'products',
      'hot'
    ],
    isFavorite: false
  },
  {
    id: 'eerrdfd88fdjjffff',
    image: '/images/products/maksim-larin-NOpsC3nWTzY-unsplash.jpg',
    name: 'Brown Nike Air',
    brand: 'Nike',
    price: 180,
    category: 'Shoes',
    type: [
      'popular',
      'products',
      'work'
    ],
    isFavorite: true
  },
  {
    id: 'dkddke030030034t4434',
    image: '/images/products/joshua-rondeau-K0FXYExhnGc-unsplash.jpg',
    name: 'Black Jacket',
    brand: 'Dark-Grey',
    price: 45,
    category: 'Jacket',
    type: [
      'popular',
      'products'
    ],
    isFavorite: false
  },
  {
    id: 'sdfjk3434kjd888df3dd',
    image: '/images/products/luke-peterson-lUMj2Zv5HUE-unsplash.jpg',
    name: 'Black Headphone',
    brand: 'SONY',
    price: 153,
    category: 'Headphone',
    type: [
      'recent',
      'work'
    ],
    isFavorite: true
  },
  {
    id: '12kddhe939ddjd6ehdhssdk',
    image: '/images/products/engin-akyurt-5raPrOhbKQo-unsplash.jpg',
    name: 'Pinky pants',
    brand: 'Pink Dimond',
    price: 89,
    category: 'Jeans',
    type: [
      'popular',
      'recent',
      'products'
    ],
    isFavorite: false
  },
  {
    id: 'dfsdf88ddjdj55455jf',
    image: '/images/products/sven-ciupka-x8Vg7Up6TUc-unsplash.jpg',
    name: 'Black Shirt',
    brand: 'LSKD',
    price: 44,
    category: 'Shirt',
    type: [
      'hot',
      'products',
      'work'
    ],
    isFavorite: true
  },
  {
    id: 'kdsfjsdjf300303ekjfdk',
    image: '/images/products/benjamin-voros-TnNo84AJJ5A-unsplash.jpg',
    name: 'Lee Jacket',
    brand: 'I See You',
    price: 27,
    category: 'Jacket',
    type: [
      'hot',
      'products',
      'work'
    ],
    isFavorite: true
  },
  {
    id: 'rertert4444trefdfg44',
    image: '/images/products/ryan-putra-j4PqlNVZ4Bc-unsplash.jpg',
    name: 'G102 Mouse',
    brand: 'Logitech',
    price: 128,
    category: 'Mouse',
    type: [
      'recent',
      'products',
      'work'
    ],
    isFavorite: false
  },
  {
    id: '2323dfdsflkdsjfldi33',
    image: '/images/products/surface-laptop-3.jpg',
    name: 'Surface pro',
    brand: 'Microsoft',
    price: 1999,
    category: 'Laptop',
    type: [
      'hot',
      'recent',
      'products',
      'work'
    ],
    isFavorite: false
  },
  {
    id: 'sdjflkf3430jdslkfj344',
    image: '/images/products/napat-saeng-_zx9p82J9sc-unsplash.jpg',
    name: 'Blue Jacket',
    brand: 'LYN',
    price: 139,
    category: 'Jacket',
    type: [
      'popular',
      'recent',
      'work'
    ],
    isFavorite: false
  },
  {
    id: 'df333kdjfldksfj0009dfdd',
    image: '/images/products/atakan-narman-Czq0SZVXxuw-unsplash.jpg',
    name: 'Yellow Speaker',
    brand: 'JBL',
    price: 164,
    category: 'Speaker',
    type: [
      'popular',
      'products'
    ],
    isFavorite: true
  }
];