import PropTypes from 'prop-types'
import DeleteFav from './DeleteFav';
//----------------------------------------------------------------------------------

const FavPackageItem = (props) => {
    const { data } = props


    return (
        <>
            <td className='p-2 border-2 '>
                <a
                    href={data?.favPackage?.package?.links?.npm}
                    target="#"
                    className='hover:underline'
                >
                    {data?.favPackage?.package?.name}
                </a>
            </td>

            <td className='border-2 text-center'>
                <DeleteFav data={data} />
            </td>
        </>
    )
}

FavPackageItem.propTypes = {
    data: PropTypes.object
}

export default FavPackageItem