export interface iProduct {
  name: string;
  review: string;
  image: string;
}

export interface iBarcodeData {
  data: number;
  type: string;
}

export interface iProductReview {
  product: iProduct;
  barcodeData: iBarcodeData;
}
