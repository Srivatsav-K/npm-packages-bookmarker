import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------
import Button from '../../components/Button'
//----------------------------------------------------------------------------------

const AddFav = (props) => {
    const { history } = props

    const handleClick = () => {
        history.push('/add-favourite')
    }


    return (
        <Button
            onClick={handleClick}
        >
            Add Fav
        </Button>
    )
}

AddFav.propTypes = {
    history: PropTypes.object
}

export default withRouter(AddFav)