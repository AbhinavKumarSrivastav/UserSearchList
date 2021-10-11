import { loaderConstants } from '../_constants/loader.constants';

const initState = {
  loader: false,
};

const LoaderReducer = (state = initState, action) => {
  switch (action.type) {
    case loaderConstants.LOADER_REQUEST:
      return { ...state, loader:action.payload };
    default:
      return { ...state };
  }
};

export{ LoaderReducer };
