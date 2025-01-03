export type CarResponse = {
  _id: string;
  title: string;
  price: string;
  features: Feature[];
  details: Details[];
  videos: string[];
  sellerNotes: SellerNote[];
  extra: string;
  images: Image[];
  domain: string[];
  pages: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface Feature {
  _id: string;
  name: string;
  icon: string | null;
  __v: number;
}

export interface Detail {
  _id: string;
  name: string;
  icon: string | null;
  __v: number;
}

export interface Option {
  _id: string;
  detailId: string;
  name: string;
  icon: string | null;
  __v: number;
}

export interface Details {
  detail: Detail;
  option: Option;
  _id: string;
}

export interface Image {
  filename: string;
  path: string;
  _id: string;
}
