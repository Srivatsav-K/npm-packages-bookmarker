import { useEffect, useState, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetPackages } from "../../actions/packagesAction"
//----------------------------------------------------------------------------------
import PackageForm from "./PackageForm"
import Search from "./Search"
//----------------------------------------------------------------------------------

const AddFavourite = () => {
    const [search, setSearch] = useState('')

    const packages = useSelector((state) => state.packages)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetPackages(search))
    }, [search, dispatch])

    const handleSearchChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }

    return (
        <div className="space-y-10">
            <Search value={search} onChange={handleSearchChange} />

            <PackageForm filteredData={packages.data} />
        </div>
    )
}

export default AddFavourite