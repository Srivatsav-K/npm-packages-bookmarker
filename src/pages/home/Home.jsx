import { useSelector } from "react-redux"
//----------------------------------------------------------------------------------
import FavouritesListing from "./FavouritesListing"
import NoFavourites from "./NoFavourites"
import AddFav from "./AddFav"
//----------------------------------------------------------------------------------

const Home = () => {

    const favPackages = useSelector((state) => state.favPackages)

    return (
        <div className="space-y-32">

            <div className="flex justify-between">
                <h1 className="text-xl font-medium">
                    Welcome to Favourite NPM Packages
                </h1>

                <div className={`${(favPackages.length === 0) ? 'hidden' : 'block'}`}>
                    <AddFav />
                </div>
            </div>

            {
                (favPackages.length > 0) ? (
                    <FavouritesListing />
                ) : (
                    <NoFavourites />
                )
            }

        </div>
    )
}

export default Home