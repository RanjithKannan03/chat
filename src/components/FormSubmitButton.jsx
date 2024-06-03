import React from 'react'

const FormSubmitButton = (props) => {
    return (
        <button className='w-full bg-black text-white p-3 rounded-lg'>

            {props.text}

        </button>
    )
}

export default FormSubmitButton