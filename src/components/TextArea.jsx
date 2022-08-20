import { useId } from "react"
import PropTypes from 'prop-types'

//----------------------------------------------------------------------------------

const TextArea = (props) => {
    const { value, onChange, name, label, fullwidth, rows, cols } = props

    const id = useId()

    return (
        <div>
            <label
                htmlFor={`${id}-${name}`}
                className='font-semibold text-gray-500'
            >
                {label}
            </label>

            <textarea
                name={name}
                id={`${id}-${name}`}
                rows={rows}
                cols={cols}
                value={value}
                onChange={onChange}
                className={`border rounded-sm p-2 w-${(fullwidth) ? 'full' : 'auto'} focus:outline-gray-500`}
            >

            </textarea>
        </div>
    )
}
//----------------------------------------------------------------------------------

TextArea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    fullwidth: PropTypes.bool,
    rows: PropTypes.number,
    cols: PropTypes.number
}

export default TextArea