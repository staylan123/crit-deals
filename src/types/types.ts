export type CheaperStoreDeal = {
  dealID: string;
  retailPrice: string;
  salePrice: string;
  storeID: string;
};

export type CheapestPrice = {
  date: number;
  price: string;
};

export type GameItem = {
  gameID: number,
  external: string,
  thumb: string
}

type Deal = {
  dealID: string,
  price: string,
  retailPrice: string,
  savings: string,
  storeId: string
}

export type GInfo = {
  cheapestPriceEver: {
    date: number
    price: number,
  },
  deals: Deal[],
  info: {
    steamAppId: string,
    thumb: string,
    title: string
  }
}

// FIX THIS SOON
export type GameInfo = {
  cheaperStores: CheaperStoreDeal[];
  cheapestPrice: CheapestPrice;
  gameID: string;
  metacriticLink: string;
  metacriticScore: string;
  name: string;
  publisher: string;
  releaseDate: number;
  retailPrice: string;
  salePrice: string;
  steamAppID: string;
  steamRatingCount: string;
  steamRatingPercent: string;
  steamRatingText: string;
  steamworks: string;
  storeID: string;
  thumb: string;
};

// * Stores
export type Store = {
  storeID: string,
  storeName: string,
  isActive: number,
  images: {
    banner: string,
    logo: string,
    icon: string
  }
}