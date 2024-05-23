'use client';

import Chat from "@/components/Chat";
import Image from "next/image";
import { CircleDashed, MagnifyingGlass, FunnelSimple } from "phosphor-react";

export default function Home() {
  return (
    <div className="flex h-screen">

      <div className="w-[25%] bg-[#eef1fa] h-screen p-10 drop-shadow flex flex-col gap-4">

        {/* Options */}
        <div className="h-auto">
          <div className="flex flex-col w-full gap-8 h-full">

            {/* Title */}
            <div className="flex justify-between items-center w-full">
              <h1 className="font-bold text-4xl">Chats</h1>
              <button><CircleDashed size={25} /></button>
            </div>

            {/* Search */}
            <div className="flex items-center bg-[#dae7fc] rounded-xl w-full h-12 px-2 gap-2 text-[#709CE6]">

              <div>
                <MagnifyingGlass size={25} />
              </div>

              <div className="w-[75%]">
                <input className="bg-transparent outline-none w-full placeholder-[#709CE6]" placeholder="Search" />
              </div>

              <div>
                <button><FunnelSimple size={25} className='text-[#B4B4B4]' /></button>
              </div>

            </div>

            {/* Archive */}
            <div className="flex w-full items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42ZM60.94,48H195.06l8,16H52.94ZM208,208H48V80H208V208Zm-42.34-61.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,164.69V104a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,146.34Z"></path></svg>
              <span>Archived</span>
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-[#B4B4B4]" />

          </div>
        </div>

        {/* Chat */}

        <div className="w-full flex-1 flex flex-col gap-4">
          {/* Pinned */}
          <div className="h-1/3 flex flex-col gap-2">
            <span>Pinned</span>

            <div className="flex h-[90%] w-full overflow-y-scroll py-2">

              <div className="flex flex-col w-full h-[200px] gap-4 pr-2 pb-2">
                <Chat src='/assets/default.png' name='Pink Panda' latestMsg='It’s so quite outside 🧐' isActive={false} time='9:36' numNewMsg={5} />
                <Chat src='/assets/default.png' name='Red Panda' latestMsg='It’s so quite outside 🧐' isActive={true} time='9:36' numNewMsg={0} />
                <Chat src='/assets/default.png' name='Green Panda' latestMsg='It’s so quite outside 🧐' isActive={false} time='9:36' numNewMsg={2} />
                <Chat src='/assets/default.png' name='Blue Panda' latestMsg='It’s so quite outside 🧐' isActive={true} time='9:36' numNewMsg={0} />

              </div>

            </div>

          </div>

          {/* All Messages */}
          <div className="h-2/3 flex flex-col gap-2">
            <span>All Messages</span>

            <div className="flex h-[90%] w-full overflow-y-scroll py-2">

              <div className="flex flex-col w-full h-[200px] gap-4 pr-2 pb-2">
                <Chat src='/assets/default.png' name='Pink Panda' latestMsg='It’s so quite outside 🧐' isActive={false} time='9:36' numNewMsg={5} />
                <Chat src='/assets/default.png' name='Red Panda' latestMsg='It’s so quite outside 🧐' isActive={true} time='9:36' numNewMsg={0} />
                <Chat src='/assets/default.png' name='Green Panda' latestMsg='It’s so quite outside 🧐' isActive={false} time='9:36' numNewMsg={2} />
                <Chat src='/assets/default.png' name='Blue Panda' latestMsg='It’s so quite outside 🧐' isActive={true} time='9:36' numNewMsg={0} />
                <Chat src='/assets/default.png' name='Blue Panda' latestMsg='It’s so quite outside 🧐' isActive={true} time='9:36' numNewMsg={0} />
                <Chat src='/assets/default.png' name='Blue Panda' latestMsg='It’s so quite outside 🧐' isActive={true} time='9:36' numNewMsg={0} />

              </div>

            </div>

          </div>


        </div>



      </div>

    </div>

  );
}
