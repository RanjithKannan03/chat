import React from 'react';
import { motion } from 'framer-motion';

const cardVariant = {
    initial: {
        opacity: 0,
        y: "100vh"
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        }
    }
}

const KeyboardShortcuts = (props) => {
    const shortcuts = [
        {
            name: "Mark as unread",
            keys: ["Ctrl", "Shift", "U"]
        },
        {
            name: "Mute",
            keys: ["Ctrl", "Shift", "M"]
        },
        {
            name: "Archive Chat",
            keys: ["Ctrl", "Shift", "E"]
        },
        {
            name: "Delete Chat",
            keys: ["Ctrl", "Shift", "D"]
        },
        {
            name: "Pin Chat",
            keys: ["Ctrl", "Shift", "P"]
        },
        {
            name: "Search Chat",
            keys: ["Ctrl", "Shift", "F"]
        },
        {
            name: "New Chat",
            keys: ["Ctrl", "N"]
        },
        {
            name: "New Group",
            keys: ["Ctrl", "Shift", "N"]
        },
        {
            name: "Profile & About",
            keys: ["Ctrl", "P"]
        },
        {
            name: "Profile & About",
            keys: ["Ctrl", "P"]
        },
        {
            name: "Increase Speed of Voice Message",
            keys: ["Shift", "."]
        },
        {
            name: "Decrease Speed of Voice Message",
            keys: ["Shift", ","]
        },
        {
            name: "Settings",
            keys: ["Shift", "G"]
        },
        {
            name: "Emoji Panel",
            keys: ["Ctrl", "E"]
        },

    ]
    return (
        <>
            <div className='absolute top-0 left-0 z-30 w-screen h-screen bg-black opacity-50' />
            <div className='absolute top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-transparent' onClick={() => { props.setShowShortcuts(false) }}>

                <motion.div variants={cardVariant} initial="initial" animate="animate" className='bg-white p-8 flex flex-col gap-8 rounded-2xl w-[60%]' onClick={(e) => { e.stopPropagation() }}>

                    <span className='text-xl font-semibold'>Keyboard Shortcuts</span>

                    <div className='grid w-full grid-cols-2 gap-10'>

                        {shortcuts.map((shortcut, index) => {
                            return (
                                <div key={index} className='flex items-center justify-between w-full'>

                                    <span>{shortcut.name}</span>

                                    <div className='flex gap-4'>

                                        {shortcut.keys.map((key, index) => {
                                            return (
                                                <span key={index} className='px-2 py-1 rounded bg-[#F3F3F3] ring-1 ring-black'>{key}</span>
                                            )
                                        })}

                                    </div>



                                </div>
                            )
                        })}

                    </div>

                    <button type='button' onClick={() => { props.setShowShortcuts(false) }} className='bg-[#5B96F7] py-1 px-4 rounded-xl grow-0 self-end text-white'>Ok</button>

                </motion.div>



            </div>
        </>
    )
}

export default KeyboardShortcuts