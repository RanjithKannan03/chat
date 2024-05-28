import React from 'react';
import ContactInfo from './ContactInfo';
import { selectedUserStore, sidebarStore } from '@/zustand/store';
import SharedMessages from './SharedMessages';

const Contact = (props) => {

  const type = sidebarStore((state) => state.type);
  const id = selectedUserStore((state) => state.id);

  return (
    <div className='w-full h-full'>
      {props.open &&
        (
          type === "CONTACT" ?
            <ContactInfo selectedID={id} />
            :
            type === "MEDIA" ?
              <SharedMessages />
              :
              null
        )}
    </div>
  )
}

export default Contact