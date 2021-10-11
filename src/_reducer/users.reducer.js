import { userConstants } from '../_constants/user.contants'

export const users = (state = {}, action) => {
  switch (action.type) {
    case userConstants.SEARCH_REQUEST:
      return {};
    case userConstants.SEARCH_SUCCESS:
      return {user: action.items};
    case userConstants.SEARCH_FAILURE:
      return {};
    default:
      return state;
  }
}