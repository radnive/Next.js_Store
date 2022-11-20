export type ProductBrief = {
  id: string,
  image: string,
  name: string,
  brand: string,
  price: number,
  category: string,
  types: string[],
  isFavorite: boolean
}

export type ProductInfo = {
  id: string,
  name: string,
  price: number,
  details: {
    image: string,
    category: string,
    brand: string,
    colors: string[],
    sizes: string[],
    isFavorite: boolean,
  },
  types: string[],
  specifications: {
    explanation: string,
    features: string[]
  },
  similar: ProductBrief[]
}