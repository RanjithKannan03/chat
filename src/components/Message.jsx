// 'use client';

import React from 'react'
import { DownloadSimple, Image } from './Icons';

// const Message_options = [
//   {
//     title: "Reply",
//   },
//   {
//     title: "React to message",
//   },
//   {
//     title: "Forward message",
//   },
//   {
//     title: "Star message",
//   },
//   {
//     title: "Report",
//   },
//   {
//     title: "Delete Message",
//   },
// ];

// const options = ()=>{
//   const [isOpen,setIsOpen]=useState(false);
//   return(
//     <div></div>
//   )
// }

const TextMessage = (props) => {
  return (
    <div className={`flex flex-col gap-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>
      <div className={`flex justify-center items-center p-4 rounded-3xl drop-shadow-lg  ${props.msg.incoming ? 'bg-white text-[#696969]' : 'bg-[#5B96F7] text-white'}`}>
        <span className='max-w-[450px]'>{props.msg.txt}</span>
      </div>
      <span className={`text-[#696969] text-sm px-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>{props.msg.time}</span>
    </div>
  )
}

const MediaMsg = (props) => {
  return (
    <div className={`flex flex-col gap-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>
      <div className={`flex justify-center items-center rounded-3xl drop-shadow-lg overflow-hidden flex-col`}>
        <div className='max-w-[450px] max-h-[450px]'>
          <img src={props.msg.url} className='object-contain' />
        </div>

        {
          props.msg.txt &&
          <div className={`${props.msg.incoming ? 'bg-white text-[#696969]' : 'bg-[#5B96F7] text-white'} w-full p-4 max-w-[450px]`}>
            <span>{props.msg.txt}</span>
          </div>
        }
      </div>
      <span className={`text-[#696969] text-sm px-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>{props.msg.time}</span>
    </div>
  )
}

const DocMsg = (props) => {
  return (
    <div className={`flex flex-col gap-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>
      <div className={`flex rounded-3xl drop-shadow-lg overflow-hidden flex-col ${props.msg.incoming ? 'bg-white text-[#696969]' : 'bg-[#5B96F7] text-white'}`}>
        <div className='flex p-4 items-center min-w-[200px] justify-center gap-8'>
          <Image size={25} />
          <span>{props.msg.docName}</span>
          <DownloadSimple size={25} />
        </div>

        {props.msg.txt &&
          <div className={`p-4 min-w-[200px] max-w-[450px]`}>
            <span>{props.msg.txt}</span>
          </div>
        }
      </div>
      <span className={`text-[#696969] text-sm px-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>{props.msg.time}</span>
    </div>
  )
}

const LinkMsg = (props) => {
  return (
    <div className={`flex flex-col gap-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>
      <div className={`flex rounded-3xl drop-shadow-lg overflow-hidden flex-col ${props.msg.incoming ? 'bg-white text-[#696969]' : 'bg-[#5B96F7] text-white'}`}>
        <div className='flex py-2 px-4 items-center min-w-[200px] max-w-[450px] self-start gap-8'>
          <a href={props.msg.link} target='_blank'>
            <span className='whitespace-nowrap'>{props.msg.link}</span>
          </a>
        </div>

        {props.msg.txt &&
          <div className={`py-2 px-4 min-w-[200px] max-w-[450px]`}>
            <span>{props.msg.txt}</span>
          </div>
        }

      </div>

    </div>
  )
}



const TimeLine = (props) => {
  return (
    <div className='w-full flex gap-4 items-center'>
      <div className='flex-1 h-[1px] bg-[#696969]' />
      <span className='text-[#696969]'>{props.date}</span>
      <div className='flex-1 h-[1px] bg-[#696969]' />
    </div>
  )
}


export { TextMessage, MediaMsg, DocMsg, TimeLine, LinkMsg };
