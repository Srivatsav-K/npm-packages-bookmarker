import { useId } from "react"
import PropTypes from 'prop-types'

//----------------------------------------------------------------------------------

const TextInput = (props) => {
    const { value, onChange, placeholder, name, fullwidth, label } = props

    const id = useId()

    return (
        <div>
            <label
                htmlFor={`${id}-${name}`}
                className='font-semibold text-gray-500'
            >
                {label}
            </label>

            <input
                type="text"
                id={`${id}-${name}`}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border-2 rounded-sm p-2 w-${(fullwidth) ? 'full' : 'auto'} focus:outline-gray-500`}
            />
        </div>
    )
}
//----------------------------------------------------------------------------------
TextInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    fullwidth: PropTypes.bool,
    label: PropTypes.string
}

export default TextInput