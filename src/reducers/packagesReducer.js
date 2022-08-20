import { GET_PACKAGES } from "../actions/packagesAction"

const packagesInitialState = {
    data: []
}

const packagesReducers = (state = packagesInitialState, action) => {
    switch (action.type) {
        case (GET_PACKAGES): {
            return { ...state, data: [...action.payload] }
        }

        default: {
            return { ...state }
        }
    }
}

export default packagesReducers