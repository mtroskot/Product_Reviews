import { ProductReviewActions } from '../../types/store/productReviewActions';
import { ProductReviewActionTypes } from '../../types/store/actionTypes';
import { iProductReview } from 'src/types/interfaces';

export interface ProductReviewState {
  productReviews: iProductReview[];
}

export const initialState: ProductReviewState = {
  productReviews: []
};

const productReviewReducer = (state = initialState, action: ProductReviewActions): ProductReviewState => {
  switch (action.type) {
    case ProductReviewActionTypes.ADD_PRODUCT_REVIEW:
      return {
        ...state,
        productReviews: [...state.productReviews, { product: action.payload.product, barcodeData: action.payload.barcodeData }]
      };
    default:
      return state;
  }
};

export default productReviewReducer;
