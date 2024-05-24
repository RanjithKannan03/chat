import Image from 'next/image';
import React from 'react'

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const TextMessage = (props) => {
  return (
    <div className={`flex justify-center items-center p-4 rounded-3xl drop-shadow-lg  ${props.msg.incoming?'self-start bg-white text-[#696969]':'self-end bg-[#5B96F7] text-white'}`}>
    <span>{props.msg.txt}</span>
    </div>
  )
}

const MediaMsg=(props)=>{
  return(
    <div className={`flex justify-center items-center rounded-3xl drop-shadow-lg overflow-hidden  ${props.msg.incoming?'self-start bg-white text-[#696969]':'self-end bg-[#5B96F7] text-white'}`}>
    <div className='max-w-[400px] max-h-[400px]'>
    <img src={props.msg.url}  className='object-contain'/>
    </div>
    </div>
  )
}


export {TextMessage,MediaMsg};
