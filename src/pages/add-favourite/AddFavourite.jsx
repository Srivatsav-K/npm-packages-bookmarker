import { useState, lazy, Suspense } from "react"
import { useSelector } from "react-redux"
//----------------------------------------------------------------------------------
//import PackageForm from "./PackageForm"
import Search from "./Search"
//----------------------------------------------------------------------------------

const PackageForm = lazy(() => import('./PackageForm'))

const AddFavourite = () => {
    const [search, setSearch] = useState('')

    const packages = useSelector((state) => state?.packages?.data)

    //search
    const filteredData = packages.filter((npmPackage) => {
        return npmPackage?.package?.name.includes(search.toLowerCase().trim())
    })

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="space-y-10">
            <Search value={search} onChange={handleSearchChange} />

            <Suspense fallback={<div className="text-center">Loading...</div>}>
                <PackageForm filteredData={filteredData} />
            </Suspense>
        </div>
    )
}

export default AddFavourite