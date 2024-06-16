'use client';

import React, { useState } from 'react';
import Search from "@/components/Search";
import Chat from "@/components/Chat";
import { CircleDashed } from "@/components/Icons";
import { ChannelList } from 'stream-chat-react';
import { useChatContext } from 'stream-chat-react';
import List from './List';
import { userStore } from '@/zustand/store';
import NewChat from './NewChat';


const ChatList = () => {

    const { client, setActiveChannel } = useChatContext();

    const filter = { members: { $in: [client.userID] } };

    const sort = { last_message_at: -1 };

    const user = userStore(state => state.user);

    const pinnedChannels = user.pinnedChannels;

    const [addChat, setAddChat] = useState(false);


    return (
        <div className="bg-[#F8FAFF] p-10 drop-shadow flex flex-col w-full h-full gap-4">


            {/* Options */}
            <div className="h-auto">
                <div className="flex flex-col w-full h-full gap-8">

                    {/* Title */}
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-4xl font-bold">Chats</h1>
                        <button><CircleDashed size={25} /></button>
                    </div>

                    {/* Search */}
                    <div>
                        <Search />
                    </div>

                    {/* Archive */}
                    <button className="flex w-full items-center gap-2 hover:text-[#709CE6]" onClick={() => { setAddChat(true) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42ZM60.94,48H195.06l8,16H52.94ZM208,208H48V80H208V208Zm-42.34-61.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,164.69V104a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,146.34Z"></path></svg>
                        <span>Add Chat</span>
                    </button>

                    {/* Line */}
                    <div className="w-full h-[1px] bg-[#B4B4B4]" />

                </div>
            </div>

            {/* Contacts List */}

            <div className="flex flex-col flex-1 w-full gap-4">
                {/* Pinned */}

                <div className='h-1/3' id='pinned-list'>
                    <ChannelList
                        filters={filter}
                        sort={sort}
                        List={(listProps) => (
                            <List {...listProps} type="messaging" isPinned={true} />
                        )}
                        Preview={(previewProps) => (
                            <Chat {...previewProps} type="messaging" isPinned={true} />
                        )}
                    />
                </div>


                {/* All Messages */}
                <div className='h-2/3' id='message-list'>

                    <ChannelList
                        filters={filter}
                        sort={sort}
                        List={(listProps) => (
                            <List {...listProps} type="messaging" isPinned={false} />
                        )}
                        Preview={(previewProps) => (
                            <Chat {...previewProps} type="messaging" isPinned={false} />
                        )}
                    />

                </div>


            </div>

            {
                addChat && (
                    <NewChat setAddChat={setAddChat} />
                )
            }



        </div>
    )
}

export default ChatList