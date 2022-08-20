import TextInput from "../../components/TextInput"
import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------

const Search = (props) => {
    const { search, onChange } = props

    return (
        <div>

            <TextInput
                label='Search for NPM Packages'
                name='search'
                value={search}
                onChange={onChange}
                placeholder='search'
                fullwidth
            />
        </div>
    )
}

Search.propTypes = {
    search: PropTypes.string,
    onChange: PropTypes.func
}

export default Search