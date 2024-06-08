import React from 'react';
import { useFormStatus } from 'react-dom';

const FormSubmitButton = (props) => {
    const status = useFormStatus();

    if (status.pending) {
        return <p>Loading...</p>
    }
    return (
        <button className='w-full p-3 text-white bg-black rounded-lg'>

            {props.text}

        </button>
    )
}

export default FormSubmitButton