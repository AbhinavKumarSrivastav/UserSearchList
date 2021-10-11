import { loaderConstants } from '../_constants/loader.constants';

export const setloader = (value) => {
  console.log("valuevalue",value)
  return {
    type: loaderConstants.LOADER_REQUEST,
    payload: { data: value },
  };
};
