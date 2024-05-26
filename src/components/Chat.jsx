import Image from 'next/image'
import React from 'react'



const Chat = (props) => {
    
    function handleClick()
  {
    props.setIsChatSelected(true);
    props.setSelectedID(props.id);
  }
    return (
        <button type='button' onClick={handleClick}>
            <div className={`flex w-full h-20 ${props.selectedID===props.id?'bg-[#5B96F7]':'bg-white'} rounded-md shrink-0 drop-shadow-lg  p-4`}>
                <div className='flex w-full items-center gap-2'>
                    {/* Profile Pic */}
                    <div className='w-1/4'>
                        <div className='w-12 h-12 relative'>
                            <Image src={props.src} fill className='object-contain rounded-full'  alt='profile pic' />
                            {/* Online Status */}
                            <div className={`absolute h-3 w-3 rounded-full ${props.isActive ? 'bg-green-400' : 'bg-red-400'} bottom-0 right-0`} />
                        </div>
                    </div>


                    {/* Name and message */}
                    <div className='w-1/2 flex flex-col gap-1 items-start'>
                        {/* Name */}
                        <h1 className={`${props.selectedID===props.id?'text-white':'text-black'} font-semibold text-start`}>{props.name}</h1>
                        {/* Message */}
                        <span className={`${props.selectedID===props.id?'text-white':'text-[#7C7C7D]'} text-sm w-full overflow-hidden whitespace-nowrap text-start`}>{props.msg}</span>
                    </div>

                    {/* Time and Number of messages */}

                    <div className='w-1/4 flex flex-col gap-1 items-center'>
                        {/* Time */}
                        <span className={`${props.selectedID===props.id?'text-white':'text-[#7C7C7D]'} text-sm`}>{props.time}</span>

                        {/* Num Messages */}

                        <div className={`w-4 h-4 bg-[#5B96F7] rounded-full flex justify-center items-center ${props.unread && props.selectedID!=props.id > 0 ? 'opacity-100' : 'opacity-0'}`}>
                            <span className={`text-white text-xs`}>{props.unread}</span>
                        </div>

                    </div>

                </div>
            </div>
        </button>
    )
}

export default Chat