import TextArea from "../../components/TextArea"
import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------

const Reason = (props) => {
    const { value, onChange } = props

    return (
        <div>
            <TextArea
                label='Why is this your fav?'
                name='reason'
                value={value}
                onChange={onChange}
                fullwidth
                rows={5}
            />
        </div>
    )
}

Reason.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Reason