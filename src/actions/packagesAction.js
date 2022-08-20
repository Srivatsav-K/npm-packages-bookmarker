import axios from 'axios'
//-------------------------------------------------------
export const GET_PACKAGES = 'GET_PACKAGES'

//-----------------------------------------------------

const getPackages = (data) => {
    return { type: GET_PACKAGES, payload: data }
}

//-----------------------------------------------------

export const startGetPackages = () => {
    return ((dispatch) => {
        axios.get('https://api.npms.io/v2/search?q=reactjs')
            .then((response) => {
                const result = response.data.results
                dispatch(getPackages(result))
            })
            .catch((err) => {
                alert(err.message)
            })
    })
}

//---------------------------------------------------------