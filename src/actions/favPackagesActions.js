export const ADD_FAV_PACKAGE = 'ADD_FAV_PACKAGE'
export const DELETE_FAV_PACKAGE = 'DELETE_FAV_PACKAGE'

//--------------------------------------------------------------

export const addFavPackage = (data) => {
    return { type: ADD_FAV_PACKAGE, payload: data }
}

//--------------------------------------------------------------

export const deleteFavPackage = (name) => {
    return { type: DELETE_FAV_PACKAGE, payload: name }
}

//--------------------------------------------------------------