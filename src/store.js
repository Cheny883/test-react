import {createStore,combineReducers} from 'redux';
import reducer1 from './reducer/reducer1'
let reducers = combineReducers({
    reducer1
})
let store = createStore(reducers);
export default store;
