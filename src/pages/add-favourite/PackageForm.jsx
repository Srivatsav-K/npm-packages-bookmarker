import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------
import { addFavPackage } from '../../actions/favPackagesActions'
//----------------------------------------------------------------------------------
import Button from '../../components/Button'
import SelectPackage from './SelectPackage'
import Reason from './Reason'
//----------------------------------------------------------------------------------


const PackageForm = (props) => {
    const { filteredData, history, search } = props

    const [favPackage, setFavPackage] = useState('')
    const [reason, setReason] = useState('')
    const [error, setError] = useState({})
    const errors = {}

    const [packages, favPackages] = useSelector((state) => [state?.packages?.data, state?.favPackages])
    const dispatch = useDispatch()

    //onChange
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'reason') {
            setReason(value)
        } else if (name === 'favPackage') {
            setFavPackage(value)
        }
    }

    //validations
    const runValidators = () => {
        if (reason.length === 0) {
            errors.reason = 'Reason Required!'
        }

        if (favPackage.length === 0) {
            errors.favPackage = 'Choose a favourite package!'
        } else if (favPackages.some((_favPackage) => _favPackage?.favPackage?.package?.name === favPackage)) {
            errors.favPackage = 'Package already exists!'
        }
    }

    //reset-form
    const resetForm = () => {
        setFavPackage('')
        setReason('')
    }

    //form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidators()
        if (Object.keys(errors).length !== 0) {
            setError(errors)
        } else {
            setError({})
            const data = {
                favPackage: packages.find((_favPackage) => _favPackage?.package?.name === favPackage),
                reason: reason
            }
            dispatch(addFavPackage(data))
            resetForm()
            history.push('/')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='space-y-10 flex flex-col'
        >
            {/*Radio (select the npm package)*/}
            <div>
                {(search.length > 0) ? (
                    <SelectPackage
                        value={favPackage}
                        onChange={handleChange}
                        data={filteredData}
                    />
                ) : (
                    <div className='text-gray-500'>
                        Start searching to see results..
                    </div>
                )}
                {error.favPackage && (
                    <div className='text-red-600 flex justify-center'>
                        {error.favPackage}
                    </div>
                )}
            </div>

            {/*Text field (why is this package for you)*/}
            <div>
                <Reason
                    value={reason}
                    onChange={handleChange}
                />
                {error.reason && (
                    <div className='text-red-600 flex justify-center'>
                        {error.reason}
                    </div>
                )}
            </div>

            <div className='self-end'>
                <Button
                    type='submit'
                >
                    Submit
                </Button>
            </div>
        </form>
    )
}

PackageForm.propTypes = {
    filteredData: PropTypes.array,
    history: PropTypes.object
}

export default withRouter(PackageForm)