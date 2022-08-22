import { GET_PACKAGES, RESULTS_LOADING_FALSE, RESULTS_LOADING_TRUE, RESULTS_NOT_FOUND } from "../actions/packagesAction"

const packagesInitialState = {
    data: [],
    isFound: true,
    loading: false
}

const packagesReducers = (state = packagesInitialState, action) => {
    switch (action.type) {
        case (RESULTS_LOADING_TRUE): {
            return { ...state, loading: true }
        }
        case (RESULTS_LOADING_FALSE): {
            return { ...state, loading: false }
        }
        case (GET_PACKAGES): {
            return { ...state, data: [...action.payload], isFound: true }
        }
        case (RESULTS_NOT_FOUND): {
            return { ...state, isFound: false }
        }
        default: {
            return { ...state }
        }
    }
}

export default packagesReducers