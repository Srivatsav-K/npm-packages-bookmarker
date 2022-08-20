import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//----------------------------------------------------------------------------------------

import favPackagesReducer from '../reducers/favPackagesReducer'
import packagesReducer from '../reducers/packagesReducer'

//----------------------------------------------------------------------------------------

const configStore = () => {
    const store = createStore(combineReducers({
        packages: packagesReducer,
        favPackages: favPackagesReducer
    }), applyMiddleware(thunk))

    return store
}

export default configStore