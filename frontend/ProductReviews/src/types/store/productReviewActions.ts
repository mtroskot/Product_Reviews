import { ProductReviewActionTypes } from './actionTypes';
import { iBarcodeData, iProduct } from 'src/types/interfaces';

interface AddProductReview {
  type: ProductReviewActionTypes.ADD_PRODUCT_REVIEW;
  payload: { product: iProduct; barcodeData: iBarcodeData };
}

export type ProductReviewActions = AddProductReview;
