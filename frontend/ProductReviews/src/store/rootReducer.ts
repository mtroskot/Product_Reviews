import { combineReducers } from 'redux';
import productReviewReducer from 'src/store/productReview/productReviewReducer';

const rootReducer = combineReducers({
    productReview: productReviewReducer,
});

export default rootReducer;
export type StoreState = ReturnType<typeof rootReducer>;
