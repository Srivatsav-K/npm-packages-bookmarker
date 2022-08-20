import { useSelector } from "react-redux"
import FavPackageItem from "./FavPackageItem"
//----------------------------------------------------------------------------------

const FavouritesListing = () => {
    const favPackages = useSelector((state) => state.favPackages)

    return (
        <table className="border-2  w-full">
            <thead>
                <tr>
                    <th className="border-2 p-2">Package Name</th>
                    <th className="border-2 p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {favPackages.map((_favPackage, i) => {
                    return (
                        <tr key={i}>
                            {/* Individual row */}
                            <FavPackageItem data={_favPackage} />
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default FavouritesListing