import { userConstants } from '../_constants/user.contants';
import { userService } from '../_services';
import { alertActions } from './alert.actions';
import { setloader } from './loader.actions';
export const userActions = {
    searchInput,
    setloader
}

function searchInput(input) {
    return dispatch => {
        dispatch(request(input));
        dispatch(setloader(true));
        userService.searchInput(input)
            .then(
                items => { 
                    dispatch(success(items));
                    dispatch(setloader(false));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function loader(loadItem) { return { type: setloader.LOADING_REQUEST, loadItem } }

    function request(items) { return { type: userConstants.SEARCH_REQUEST, items } }
    function success(items) { return { type: userConstants.SEARCH_SUCCESS, items } }
    function failure(error) { return { type: userConstants.SEARCH_FAILURE, error } }
}