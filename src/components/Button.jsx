import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------

const Button = (props) => {
    const { children, type = 'button', onClick, color = 'bg-violet-700' } = props


    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 px-3 rounded-sm text-white font-semibold ${color} `}
        >
            {children}
        </button>
    )
}
//----------------------------------------------------------------------------------
Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string
}

export default Button