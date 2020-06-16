import { ProductReviewActions } from 'src/types/store/productReviewActions';
import { ProductReviewActionTypes } from '../../types/store/actionTypes';
import { iBarcodeData, iProduct } from 'src/types/interfaces';

export const addProductReview = (product: iProduct, barcodeData: iBarcodeData): ProductReviewActions => ({
  type: ProductReviewActionTypes.ADD_PRODUCT_REVIEW,
  payload: { product, barcodeData }
});
