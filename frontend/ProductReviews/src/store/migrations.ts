import { StoreState } from 'src/store/rootReducer';

export default {
  0: (previousVersionState: StoreState) => {
    return {
      ...previousVersionState
    };
  }
};
