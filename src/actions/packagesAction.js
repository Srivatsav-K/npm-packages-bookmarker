import axios from 'axios'
//-------------------------------------------------------
export const GET_PACKAGES = 'GET_PACKAGES'

//-----------------------------------------------------

const getPackages = (data) => {
    return { type: GET_PACKAGES, payload: data }
}

//-----------------------------------------------------

export const startGetPackages = () => {
    return (async (dispatch) => {
        try {
            const response = await axios.get('https://api.npms.io/v2/search?q=reactjs')
            dispatch(getPackages(response.data.results))
        } catch (err) {
            alert(err.message)
        }
    })
}

//---------------------------------------------------------