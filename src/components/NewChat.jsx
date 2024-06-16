'use client';

import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';
import { MagnifyingGlass } from './Icons';
import { userStore } from '@/zustand/store';
import SearchChat from './SearchChat';

const NewChat = (props) => {
    const { client, setActiveChannel } = useChatContext();

    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);

    const user = userStore((state) => state.user);


    useEffect(() => {
        const search = async () => {
            if (query) {
                try {
                    const response = await client.queryUsers({
                        name: { $autocomplete: query }
                    }, {
                        last_active: -1
                    });
                    setUsers(response.users);
                    console.log(response);
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
        search();
    }, [query])

    async function createChannel(u) {
        const channel = client.channel('messaging', {
            members: [user.id, u.id]
        });

        await channel.create();
        setActiveChannel(channel);

    }



    return (
        <div className='h-screen w-screen bg-[rgba(0,0,0,0.40)] flex items-center justify-center absolute top-0 left-0' onClick={() => props.setAddChat(false)}>

            <div className='bg-white w-[30%] flex flex-col gap-8 rounded-2xl p-8 justify-between' onClick={(e) => e.stopPropagation()}>

                <span className='text-xl font-semibold text-black'>Start a new Chat</span>

                <div className='flex items-center gap-4'>

                    <MagnifyingGlass size={25} />
                    <input type='text' autoComplete='off' className='w-full px-4 py-1 rounded shadow ring-1 ring-black focus:outline-none' value={query} onChange={(e) => { setQuery(e.target.value) }} />

                </div>

                {
                    query ? (
                        <div className='w-full flex h-[400px] overflow-y-auto p-2'>

                            <div className='flex flex-col w-full gap-4'>

                                {
                                    users.map((user) => {
                                        return (
                                            <SearchChat client={user} createChannel={createChannel} />
                                        )
                                    })
                                }

                            </div>

                        </div>
                    ) :
                        (
                            <div className='w-full flex h-[400px] items-center justify-center'>

                                <span className='text-xl font-medium'>Enter a name to get started.</span>

                            </div>
                        )
                }



            </div>

        </div>
    )
}

export default NewChat