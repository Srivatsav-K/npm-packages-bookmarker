import AddFav from './AddFav'
//----------------------------------------------------------------------------------

const NoFavourites = () => {
    return (
        <div className='border-2 p-32 flex flex-col items-center space-y-3'>

            <h4>
                You don't have any favs yet. Please add.
            </h4>

            <AddFav />
        </div>
    )
}

export default NoFavourites