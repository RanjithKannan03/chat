import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='h-screen w-screen flex'>
            {children}
        </div>
    )
}

export default layout