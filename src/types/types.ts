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

// * Single Game from games endpoint (based off query)
export type GameItem = {
  cheapest: number,
  gameID: number,
  external: string,
  thumb: string
}

// * Breakdown of game price per store
export type Deal = {
  dealID: string,
  price: string,
  retailPrice: string,
  savings: string,
  storeID: string
}

// * Detailed price of game
export type GameItemDetailed = {
  cheapestPriceEver: CheapestPrice
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