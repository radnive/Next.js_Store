import { ProductBrief, ProductInfo } from "./product";

export type ApiResponse = {
  products: ProductBrief[],
  isEndOfList: boolean
}

export function sliceArray(array: ProductInfo[], pageIndex: number) : ApiResponse {
  const endIndex = pageIndex * 8;

  if(endIndex <= array.length) {
    return {
      products: array.slice(endIndex - 8, endIndex).map(p => summarize(p)),
      isEndOfList: endIndex === array.length
    };
  } else {
    return {
      products: array.slice(endIndex - 8, array.length).map(p => summarize(p)),
      isEndOfList: endIndex >= array.length
    };
  }
}

export function summarize(product: ProductInfo) : ProductBrief {
  return {
    id: product.id,
    image: product.details.image,
    name: product.name,
    brand: product.details.brand,
    price: product.price,
    category: product.details.category,
    types: product.types,
    isFavorite: product.details.isFavorite
  };
}

export const allProducts: ProductInfo[] = [
  {
    id: "alkdjsflkajsi324",
    name: "Rainbow Sneakers",
    price: 90,
    details: {
      image: "/images/products/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg",
      category: "Shoes",
      brand: "Nike",
      colors: [
        "#F4CDCE",
        "#F8F7FC",
        "#D9D7FC",
        "#F8E0B0",
        "#C3F0FF"
      ],
      sizes: [
        "40",
        "41",
        "42"
      ],
      isFavorite: false
    },
    types: [
      "popular",
      "hot",
      "recent"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "asdf3erew34rdsf",
    name: "Leather Purse",
    price: 50,
    details: {
      image: "/images/products/irene-kredenets-tcVH_BwHtrc-unsplash.jpg",
      category: "Bag",
      brand: "Michael Kors",
      colors: [
        "#A1553D",
        "#18181A",
        "#FFFFFF"
      ],
      sizes: [],
      isFavorite: true
    },
    types: [
      "products",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "asdfk55d3wrwefsld",
    name: "Loose Blouse",
    price: 70,
    details: {
      image: "/images/products/tobias-tullius-Fg15LdqpWrs-unsplash.jpg",
      category: "Blouse",
      brand: "TACVASEN",
      colors: [
        "#BE775D",
        "#2B2F3B",
        "#D0D4D7"
      ],
      sizes: [
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      isFavorite: false
    },
    types: [
      "hot"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "asdlkfjdkfdsf3rwefsd",
    name: "Funky heels",
    price: 40,
    details: {
      image: "/images/products/mohammad-metri-E-0ON3VGrBc-unsplash.jpg",
      category: "Shoes",
      brand: "Leevar Braided",
      colors: [
        "#1774B1",
        "#BD0A3C"
      ],
      sizes: [
        "35",
        "37",
        "38",
        "40"
      ],
      isFavorite: true
    },
    types: [
      "products",
      "popular"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "sdkfe3rdslj00dvdsf",
    name: "Black T-shirt",
    price: 20,
    details: {
      image: "/images/products/faith-yarn-Wr0TpKqf26s-unsplash.jpg",
      category: "Shirt",
      brand: "Gildan",
      colors: [
        "#141319",
        "#FFFFFF"
      ],
      sizes: [
        "M",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      isFavorite: false
    },
    types: [
      "work",
      "hot"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "ajdsflkjer23r77sdfk",
    name: "White shirt",
    price: 30,
    details: {
      image: "/images/products/mediamodifier-TvL5vIgwiwo-unsplash.jpg",
      category: "Shirt",
      brand: "Hanes",
      colors: [
        "#FFFFFF",
        "#21211E",
        "#D9A26A",
        "#6F675A"
      ],
      sizes: [
        "S",
        "L",
        "XXL"
      ],
      isFavorite: true
    },
    types: [
      "products",
      "popular",
      "recent"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "sdf323rfsdfsdt3322sd",
    name: "Laptop Bag",
    price: 40,
    details: {
      image: "/images/products/sun-lingyan-_H0fjILH5Vw-unsplash.jpg",
      category: "Bag",
      brand: "Dachee",
      colors: [
        "#495472",
        "#ECD446"
      ],
      sizes: [],
      isFavorite: false
    },
    types: [
      "work",
      "products"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "sdlkfjslj3423fkjsdf",
    name: "Ripped Jeans",
    price: 20,
    details: {
      image: "/images/products/tamara-bellis-gmw_1R_gAdg-unsplash.jpg",
      category: "Jeans",
      brand: "Genleck",
      colors: [
        "#B3C0C9"
      ],
      sizes: [
        "S",
        "M",
        "XL",
        "XXL"
      ],
      isFavorite: true
    },
    types: [
      "popular",
      "recent"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "sdfsdfsddd3333edfdf3t00",
    name: "White Headphone",
    price: 490,
    details: {
      image: "/images/products/adam-birkett-vISNAATFXlE-unsplash.jpg",
      category: "Headphone",
      brand: "Beats",
      colors: [
        "#FFFFFF",
        "#E54040",
        "#050052",
        "#1F1F1E"
      ],
      sizes: [],
      isFavorite: true
    },
    types: [
      "hot",
      "products"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "asdjflkj34rtq34fdk",
    name: "Sneakers shoes",
    price: 27,
    details: {
      image: "/images/products/mojtaba-fahiminia-t4g1gctAaKk-unsplash.jpg",
      category: "Shoes",
      brand: "Sneakers",
      colors: [
        "#FFFFFF",
        "#E76B00",
        "#C1AFA0"
      ],
      sizes: [
        "41",
        "42",
        "43",
        "44",
        "45"
      ],
      isFavorite: false
    },
    types: [
      "recent",
      "hot"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "skldjf3r3tro0dsfsda5",
    name: "Not your bae",
    price: 43,
    details: {
      image: "/images/products/alicia-petresc-BciCcl8tjVU-unsplash.jpg",
      category: "Jeans",
      brand: "Stay Free",
      colors: [
        "#757B76"
      ],
      sizes: [
        "S",
        "M",
        "XL",
        "XXL"
      ],
      isFavorite: false
    },
    types: [
      "products",
      "popular"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "asldfjdkf33r304994edd",
    name: "Black Bag",
    price: 234,
    details: {
      image: "/images/products/korie-cull-OmIEij4MhnA-unsplash.jpg",
      category: "Bag",
      brand: "Louis Vuitton",
      colors: [
        "#0C0F14"
      ],
      sizes: [],
      isFavorite: false
    },
    types: [
      "work",
      "hot",
      "recent"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "dkdkdkd3939949idkd",
    name: "Nike SuperRep Go",
    price: 133,
    details: {
      image: "/images/products/usama-akram-kP6knT7tjn4-unsplash.jpg",
      category: "Shoes",
      brand: "Nike",
      colors: [
        "#B3E140",
        "#1A1C17",
        "#FFFFFF",
        "#FF8C18"
      ],
      sizes: [
        "42",
        "43",
        "44",
        "45"
      ],
      isFavorite: true
    },
    types: [
      "popular",
      "hot",
      "recent"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "kkkkdghdke3d9sdfj349",
    name: "Blue Jeans",
    price: 55,
    details: {
      image: "/images/products/cain-beaudoin-eWKmWtHV4pY-unsplash.jpg",
      category: "Jeans",
      brand: "Star",
      colors: [
        "#95CCD9",
        "#FFFFFF",
        "#FFFFFF"
      ],
      sizes: [
        "L",
        "XL",
        "XXL"
      ],
      isFavorite: true
    },
    types: [
      "hot",
      "recent"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "55kjdfkjdfkjdfjkl",
    name: "White T-Shirt",
    price: 48,
    details: {
      image: "/images/products/anomaly-WWesmHEgXDs-unsplash.jpg",
      category: "Shirt",
      brand: "Blank & White",
      colors: [
        "#FFFFFF"
      ],
      sizes: [
        "M",
        "L",
        "XL",
        "XXL"
      ],
      isFavorite: true
    },
    types: [
      "popular",
      "products",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "33ddddddgdvcxvdfasdfererd",
    name: "Macbook pro",
    price: 1999,
    details: {
      image: "/images/products/theregisti-XetpscGVLtg-unsplash.jpg",
      category: "Laptop",
      brand: "Apple",
      colors: [
        "#D5D9DB",
        "#484A4C",
        "#F7ABAF"
      ],
      sizes: [
        "8GB RAM",
        "16GB RAM"
      ],
      isFavorite: true
    },
    types: [
      "popular",
      "products",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "uudjhksdjhfsdjhf8884",
    name: "Men’s Fall Fashion",
    price: 37,
    details: {
      image: "/images/products/redd-f-jC7nVH_Sw8k-unsplash.jpg",
      category: "Jeans",
      brand: "Brown Star",
      colors: [
        "#B4965E",
        "#FFD8B9",
        "#363636"
      ],
      sizes: [
        "L",
        "XL",
        "XXL"
      ],
      isFavorite: true
    },
    types: [
      "popular",
      "hot",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "133eddfs34435345",
    name: "Timberland Anniversary",
    price: 34,
    details: {
      image: "/images/products/tom-sodoge-3vAdYH9FfG0-unsplash.jpg",
      category: "Shoes",
      brand: "ZSZNT",
      colors: [
        "#794B33",
        "#1A1A1C"
      ],
      sizes: [
        "37",
        "38",
        "39",
        "40"
      ],
      isFavorite: false
    },
    types: [
      "recent",
      "products",
      "hot"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "eerrdfd88fdjjffff",
    name: "Brown Nike Air",
    price: 180,
    details: {
      image: "/images/products/maksim-larin-NOpsC3nWTzY-unsplash.jpg",
      category: "Shoes",
      brand: "Nike",
      colors: [
        "#94562A",
        "#322826",
        "#FFFFFF"
      ],
      sizes: [
        "41",
        "42",
        "43"
      ],
      isFavorite: true
    },
    types: [
      "popular",
      "products",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "dkddke030030034t4434",
    name: "Black Jacket",
    price: 45,
    details: {
      image: "/images/products/joshua-rondeau-K0FXYExhnGc-unsplash.jpg",
      category: "Jacket",
      brand: "Dark-Grey",
      colors: [
        "#1D1D25"
      ],
      sizes: [
        "S",
        "M",
        "XL"
      ],
      isFavorite: false
    },
    types: [
      "popular",
      "products"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "sdfjk3434kjd888df3dd",
    name: "Black Headphone",
    price: 153,
    details: {
      image: "/images/products/luke-peterson-lUMj2Zv5HUE-unsplash.jpg",
      category: "Headphone",
      brand: "SONY",
      colors: [
        "#151515",
        "#FF7D68",
        "#C3F0FF",
        "#FFFFFF"
      ],
      sizes: [],
      isFavorite: true
    },
    types: [
      "recent",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "12kddhe939ddjd6ehdhssdk",
    name: "Pinky pants",
    price: 89,
    details: {
      image: "/images/products/engin-akyurt-5raPrOhbKQo-unsplash.jpg",
      category: "Jeans",
      brand: "Pink Dimond",
      colors: [
        "#D2A495",
        "#FFFFFF",
        "#3C3C3C"
      ],
      sizes: [
        "S",
        "M",
        "L",
        "XL"
      ],
      isFavorite: false
    },
    types: [
      "popular",
      "recent",
      "products"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "dfsdf88ddjdj55455jf",
    name: "Black Shirt",
    price: 44,
    details: {
      image: "/images/products/sven-ciupka-x8Vg7Up6TUc-unsplash.jpg",
      category: "Shirt",
      brand: "LSKD",
      colors: [
        "#0E0C0D",
        "#FF5E00",
        "#6DFF2E",
        "#58C6EB",
        "#FFFFFF",
        "#241D40"
      ],
      sizes: [
        "M",
        "XL",
        "XXL",
        "XXXL"
      ],
      isFavorite: true
    },
    types: [
      "hot",
      "products",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "kdsfjsdjf300303ekjfdk",
    name: "Lee Jacket",
    price: 27,
    details: {
      image: "/images/products/benjamin-voros-TnNo84AJJ5A-unsplash.jpg",
      category: "Jacket",
      brand: "I See You",
      colors: [
        "#A1C7DA"
      ],
      sizes: [
        "XL",
        "XXL",
        "XXXL"
      ],
      isFavorite: true
    },
    types: [
      "hot",
      "products",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "rertert4444trefdfg44",
    name: "G102 Mouse",
    price: 128,
    details: {
      image: "/images/products/ryan-putra-j4PqlNVZ4Bc-unsplash.jpg",
      category: "Mouse",
      brand: "Logitech",
      colors: [
        "#1E2225"
      ],
      sizes: [],
      isFavorite: false
    },
    types: [
      "recent",
      "products",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "2323dfdsflkdsjfldi33",
    name: "Surface pro",
    price: 1999,
    details: {
      image: "/images/products/windows-c-lUYtNjqxw-unsplash.jpg",
      category: "Laptop",
      brand: "Microsoft",
      colors: [
        "#D4D4D4",
        "#4F5760",
        "#C3F0FF"
      ],
      sizes: [
        "8GB RAM",
        "16GB RAM"
      ],
      isFavorite: false
    },
    types: [
      "hot",
      "recent",
      "products",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "sdjflkf3430jdslkfj344",
    name: "Blue Jacket",
    price: 139,
    details: {
      image: "/images/products/napat-saeng-_zx9p82J9sc-unsplash.jpg",
      category: "Jacket",
      brand: "LYN",
      colors: [
        "#004193"
      ],
      sizes: [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      isFavorite: false
    },
    types: [
      "popular",
      "recent",
      "work"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  },
  {
    id: "df333kdjfldksfj0009dfdd",
    name: "Loud Speaker",
    price: 164,
    details: {
      image: "/images/products/atakan-narman-Czq0SZVXxuw-unsplash.jpg",
      category: "Speaker",
      brand: "JBL",
      colors: [
        "#F6CF31",
        "#1AC1FF",
        "#7EFF3C",
        "#FF4F3B",
        "#AB47DF"
      ],
      sizes: [],
      isFavorite: true
    },
    types: [
      "popular",
      "products"
    ],
    specifications: {
      explanation: "",
      features: []
    },
    similar: []
  }
];