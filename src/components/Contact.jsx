import React from 'react';
import ContactInfo from './ContactInfo';
import { selectedUserStore, sidebarStore } from '@/zustand/store';
import SharedMessages from './SharedMessages';
import Starred from './Starred';

const Contact = (props) => {

  const type = sidebarStore((state) => state.type);
  const id = selectedUserStore((state) => state.id);

  return (
    <div className='w-full h-full bg-white'>
      {props.open &&
        (
          type === "CONTACT" ?
            <ContactInfo selectedID={id} />
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