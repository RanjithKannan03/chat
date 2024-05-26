import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const sidebarStore=create(
    persist(
        (set,get)=>({
            open:false,
            type:"CONTACT", // CONTACT or STARRED or SHARED
            toggle:()=>set({open:!get().open})
        }),
        {
            name: 'sidebar-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
          },
    )
);