import { ADD_FAV_PACKAGE, DELETE_FAV_PACKAGE } from "../actions/favPackagesActions"

const favPackagesInitialState = JSON.parse(localStorage.getItem('favPackages')) || []

const favouritePackagesReducer = (state = favPackagesInitialState, action) => {
    switch (action.type) {
        case (ADD_FAV_PACKAGE): {
            return [{ ...action.payload }, ...state]
        }
        case (DELETE_FAV_PACKAGE): {
            return (
                state.filter((item) => {
                    return item.favPackage.package.name !== action.payload
                })
            )
        }
        default: {
            return [...state]
        }
    }
}

export default favouritePackagesReducer