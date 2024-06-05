'use client';

import React from 'react'
import { DownloadSimple, Image, X } from './Icons';
import { useState } from 'react';
import { animate, motion } from 'framer-motion';

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

const optionsVariant = {
  close: {
    scale: 0,
    opacity: 0
  },
  open: {
    scale: 1,
    opacity: 1
  }
}

const Options = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative py-2'>
      <button className='relative flex flex-col items-center w-4 h-8 gap-1' onClick={() => { setIsOpen((prev) => { return !prev }) }}>
        <div className='w-[3px] h-[3px] rounded-full bg-[#696969]' />
        <div className='w-[3px] h-[3px] rounded-full bg-[#696969]' />
        <div className='w-[3px] h-[3px] rounded-full bg-[#696969]' />
      </button>

      {isOpen &&
        <motion.div variants={optionsVariant} initial="close" animate="open" style={{ transformOrigin: 'top left' }} className='flex items-center w-[200px] justify-center bg-white absolute z-30 py-4 -top-2 -left-2 shadow rounded-lg'>
          <button className='absolute flex top-3 left-1' onClick={() => { setIsOpen((prev) => { return !prev }) }}>
            <X size={20} />
          </button>
          <div className='flex flex-col justify-center gap-4 '>
            {
              Message_options.map((option) => {
                return (
                  <span>{option.title}</span>
                )
              })
            }
          </div>
        </motion.div>
      }
    </div>
  )
}

const TextMessage = (props) => {
  return (
    <div className={`flex gap-4 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>

      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? 'hidden' : ''}`}><Options /></div>
      }

      <div className={`flex flex-col gap-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>
        <div className={`flex justify-center items-center p-4 rounded-3xl drop-shadow-lg  ${props.msg.incoming ? 'bg-white text-[#696969]' : 'bg-[#5B96F7] text-white'}`}>
          <span className='max-w-[450px]'>{props.msg.txt}</span>
        </div>
        <span className={`text-[#696969] text-sm px-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>{props.msg.time}</span>
      </div>
      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? '' : 'hidden'}`}><Options /></div>
      }

    </div>
  )
}

const MediaMsg = (props) => {
  return (
    <div className={`flex gap-4 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>

      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? 'hidden' : ''}`}><Options /></div>
      }

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

      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? '' : 'hidden'}`}><Options /></div>
      }
    </div>
  )
}

const DocMsg = (props) => {
  return (
    <div className={`flex gap-4 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>

      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? 'hidden' : ''}`}><Options /></div>
      }

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

      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? '' : 'hidden'}`}><Options /></div>
      }
    </div>
  )
}

const LinkMsg = (props) => {
  return (
    <div className={`flex gap-4 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>

      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? 'hidden' : ''}`}><Options /></div>
      }

      <div className={`flex flex-col gap-2`}>
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
        <span className={`text-[#696969] text-sm px-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>{props.msg.time}</span>

      </div>

      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? '' : 'hidden'}`}><Options /></div>
      }

    </div>
  )
}

const ReplyMsg = (props) => {
  return (
    <div className={`flex gap-4 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>
      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? 'hidden' : ''}`}><Options /></div>
      }
      <div className={`flex flex-col gap-2`}>
        <div className={`flex justify-center items-center rounded-3xl drop-shadow-lg overflow-hidden flex-col ${props.msg.incoming ? 'bg-[#b6b2b2] text-[#696969]' : 'bg-[#4d80d2] text-white'}`}>
          <div className='flex py-2 px-4 items-center min-w-[200px] max-w-[450px] self-start gap-8'>
            <span>{props.msg.txt}</span>
          </div>

          {
            props.msg.reply &&
            <div className={`${props.msg.incoming ? 'bg-white text-[#696969]' : 'bg-[#5B96F7] text-white'} shadow w-full p-4 max-w-[450px]`}>
              <span>{props.msg.reply}</span>
            </div>
          }
        </div>
        <span className={`text-[#696969] text-sm px-2 ${props.msg.incoming ? 'self-start' : 'self-end'}`}>{props.msg.time}</span>
      </div>

      {
        props.msg.options &&
        <div className={`${props.msg.incoming ? '' : 'hidden'}`}><Options /></div>
      }

    </div>
  )
}



const TimeLine = (props) => {
  return (
    <div className='flex items-center w-full gap-4'>
      <div className='flex-1 h-[1px] bg-[#696969]' />
      <span className='text-[#696969]'>{props.date}</span>
      <div className='flex-1 h-[1px] bg-[#696969]' />
    </div>
  )
}


export { TextMessage, MediaMsg, DocMsg, TimeLine, LinkMsg, ReplyMsg };
