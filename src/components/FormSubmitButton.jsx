import React from 'react'

const FormSubmitButton = (props) => {
    return (
        <button className='w-full p-3 text-white bg-black rounded-lg'>

            {props.text}

        </button>
    )
}

export default FormSubmitButton