import Chat from "@/components/Chat";
import { CircleDashed } from "@/components/Icons";
import { faker } from '@faker-js/faker';
import ChatScreen from "@/components/ChatScreen";
import Search from "@/components/Search";
import DefaultScreen from "@/components/DefaultScreen";
import Contact from "@/components/Contact";
import ChatContent from "@/components/ChatContent";
import SideBar from "@/components/SideBar";

export default function Home() {
  faker.seed(123);

  const ChatList = [
    {
      id: 0,
      img: faker.image.avatar(),
      name: faker.internet.userName(),
      msg: faker.music.songName(),
      time: "9:36",
      unread: 0,
      pinned: true,
      online: true,
    },
    {
      id: 1,
      img: faker.image.avatar(),
      name: faker.internet.userName(),
      msg: faker.music.songName(),
      time: "12:02",
      unread: 2,
      pinned: true,
      online: false,
    },
    {
      id: 2,
      img: faker.image.avatar(),
      name: faker.internet.userName(),
      msg: faker.music.songName(),
      time: "10:35",
      unread: 3,
      pinned: false,
      online: true,
    },
    {
      id: 3,
      img: faker.image.avatar(),
      name: faker.internet.userName(),
      msg: faker.music.songName(),
      time: "04:00",
      unread: 0,
      pinned: false,
      online: true,
    },
    {
      id: 4,
      img: faker.image.avatar(),
      name: faker.internet.userName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      id: 5,
      img: faker.image.avatar(),
      name: faker.internet.userName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      id: 6,
      img: faker.image.avatar(),
      name: faker.internet.userName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      id: 7,
      img: faker.image.avatar(),
      name: faker.internet.userName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
  ];



  return (

    <div className="flex h-screen">
      {/* Contacts */}

      <div className="w-[23%] bg-[#F8FAFF] h-screen p-10 drop-shadow flex flex-col gap-4">


        {/* Options */}
        <div className="h-auto">
          <div className="flex flex-col w-full gap-8 h-full">

            {/* Title */}
            <div className="flex justify-between items-center w-full">
              <h1 className="font-bold text-4xl">Chats</h1>
              <button><CircleDashed size={25} /></button>
            </div>

            {/* Search */}
            <div>
              <Search />
            </div>

            {/* Archive */}
            <button className="flex w-full items-center gap-2 hover:text-[#709CE6]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42ZM60.94,48H195.06l8,16H52.94ZM208,208H48V80H208V208Zm-42.34-61.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,164.69V104a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,146.34Z"></path></svg>
              <span>Archived</span>
            </button>

            {/* Line */}
            <div className="w-full h-[1px] bg-[#B4B4B4]" />

          </div>
        </div>

        {/* Contacts List */}

        <div className="w-full flex-1 flex flex-col gap-4">
          {/* Pinned */}
          <div className="h-1/3 flex flex-col gap-2">
            <span>Pinned</span>

            <div className="flex flex-1 w-full overflow-y-scroll py-2">

              <div className="flex flex-col w-full h-[200px] gap-4 pr-2 pb-2">
                {
                  ChatList.filter((chat) => { return (chat.pinned === true) }).map((chat) => {
                    return (
                      <Chat key={chat.id} id={chat.id} src={chat.img} name={chat.name} msg={chat.msg} isActive={chat.online} time={chat.time} unread={chat.unread} />
                    )
                  })
                }

              </div>

            </div>

          </div>

          {/* All Messages */}
          <div className="h-2/3 flex flex-col gap-2">
            <span>All Messages</span>

            <div className="flex flex-1 w-full overflow-y-scroll py-2">

              <div className="flex flex-col w-full h-[200px] gap-4 pr-2 pb-2">
                {
                  ChatList.filter((chat) => { return (chat.pinned === false) }).map((chat) => {
                    return (
                      <Chat key={chat.id} id={chat.id} src={chat.img} name={chat.name} msg={chat.msg} isActive={chat.online} time={chat.time} unread={chat.unread} />
                    )
                  })
                }

              </div>

            </div>

          </div>


        </div>



      </div>

      {/* Chat Screen */}
      <div className="flex-1">


        <ChatContent />

      </div>


      {/* Contact Info */}
      <SideBar />


    </div>

  );
}
