import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------
import { deleteFavPackage } from '../../actions/favPackagesActions'
//----------------------------------------------------------------------------------
import Button from '../../components/Button'
//----------------------------------------------------------------------------------
import { TrashIcon } from '@heroicons/react/solid'
//----------------------------------------------------------------------------------

const DeleteFav = (props) => {
    const { data } = props
    //dialog state
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const toggleDialog = () => {
        setOpen(!open)
    }

    const handleDelete = () => {
        dispatch(deleteFavPackage(data?.favPackage?.package?.name))
        toggleDialog()
    }

    return (
        <div>
            <Button
                color='inherit'
                onClick={toggleDialog}
            >
                <TrashIcon className="h-5 w-5 text-red-700" />
            </Button>

            {/*dialog */}
            <dialog
                open={open}
                className='bg-slate-200 rounded-md '
            >
                <div className='space-y-10 p-10 '>
                    <h2>
                        Are you sure you want to delete?
                    </h2>

                    <div className='flex justify-evenly'>
                        <Button
                            color='bg-red-600'
                            onClick={toggleDialog}
                        >
                            Cancel
                        </Button>

                        <Button
                            color='bg-green-600'
                            onClick={handleDelete}
                        >
                            Yes
                        </Button>
                    </div>
                </div>
            </dialog>


        </div>
    )
}

DeleteFav.propTypes = {
    data: PropTypes.object
}

export default DeleteFav