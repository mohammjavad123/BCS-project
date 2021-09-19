import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { createStore, applyMiddleware ,combineReducers} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';// create your reducer
import { reducer as formReducer } from 'redux-form'
const reducer = (state = {tick: 'init',test:'hi'}, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case 'TICK':
            return {...state, tick: action.payload};
            case 'test':
                return {...state, test: action.payload};
        default:
            return state;
    } 
    
};
const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    me:reducer,
    form: formReducer
  })

// create a makeStore function
const makeStore = context => createStore(rootReducer, devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  ));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});