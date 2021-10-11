import { combineReducers } from 'redux';
import { users } from './users.reducer';
import { LoaderReducer } from './loader.reducer';

const rootReducer = combineReducers({
    users,
    LoaderReducer
});

export default rootReducer;