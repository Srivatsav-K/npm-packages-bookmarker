import { useId } from "react"
import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------

const SelectPackage = (props) => {
    const { data, value, onChange } = props

    const id = useId()

    return (
        <div className="space-y-4">
            <h4 className="font-semibold text-gray-500">
                Results
            </h4>

            <div className="max-h-[12rem] overflow-y-scroll" >
                {
                    (data.length === 0) ? (
                        //search results no matching items
                        <div className="text-red-600">
                            No results found
                        </div>

                    ) : (
                        //filtered items
                        data.map((npmPackage, i) => {
                            const { package: { name } } = npmPackage

                            return (
                                <div key={i} className='space-x-2'>
                                    <input
                                        id={`${id}-${name}`}
                                        type="radio"
                                        name='favPackage'
                                        value={name}
                                        checked={name === value}
                                        onChange={onChange}
                                        className="accent-violet-700"
                                    />

                                    <label
                                        htmlFor={`${id}-${name}`}
                                        className='cursor-pointer'
                                    >
                                        {name}
                                    </label>
                                </div>
                            )
                        })

                    )
                }
            </div>
        </div >
    )
}

SelectPackage.propTypes = {
    data: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default SelectPackage