import React from 'react';
import ContactInfo from './ContactInfo';
import { selectedUserStore, sidebarStore } from '@/zustand/store';
import SharedMessages from './SharedMessages';
import Starred from './Starred';

const Contact = (props) => {

  const type = sidebarStore((state) => state.type);


  return (
    <div className='w-full h-full bg-white'>
      {props.open &&
        (
          type === "CONTACT" ?
            <ContactInfo />
            :
            type === "MEDIA" ?
              <SharedMessages />
              :
              <Starred />
        )}
    </div>
  )
}

export default Contact