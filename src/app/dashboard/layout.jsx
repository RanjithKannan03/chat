import NavBar from '@/components/navbar'
import React from 'react'

const layout = ({children}) => {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-20">
                <NavBar />
            </div>
            <div className="w-[calc(100vw-5rem)]">
                {children}
            </div>
        </div>
    )
}

export default layout