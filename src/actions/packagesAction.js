import axios from 'axios'
//-------------------------------------------------------
export const RESULTS_NOT_FOUND = 'RESULTS_NOT_FOUND'
export const RESULTS_LOADING_TRUE = 'RESULTS_LOADING_TRUE'
export const RESULTS_LOADING_FALSE = 'RESULTS_LOADING_FALSE'
export const GET_PACKAGES = 'GET_PACKAGES'
//-----------------------------------------------------

const getPackages = (data) => {
    return { type: GET_PACKAGES, payload: data }
}

const resultsLoadingTrue = () => {
    return { type: RESULTS_LOADING_TRUE }
}

const resultsLoadingFalse = () => {
    return { type: RESULTS_LOADING_FALSE }
}

const resultsNotFound = () => {
    return { type: RESULTS_NOT_FOUND }
}

//-----------------------------------------------------

export const startGetPackages = (search) => {
    return (async (dispatch) => {
        try {

            dispatch(resultsLoadingTrue())

            const response = await axios.get(`https://api.npms.io/v2/search?q=${(search) ? (search) : 'reactjs'}`)

            dispatch(resultsLoadingFalse())

            if (!response.data.total) {
                dispatch(resultsNotFound())
            } else {
                dispatch(getPackages(response.data.results))
            }

        } catch (err) {
            dispatch(resultsLoadingFalse())
            alert(err.message)
        }
    })
}

//---------------------------------------------------------