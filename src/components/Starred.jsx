import React from 'react';
import { ArrowLeft } from './Icons';
import { sidebarStore } from '@/zustand/store';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMessage, TimeLine } from './Message';
import { faker } from '@faker-js/faker';


const Starred = () => {
    faker.seed(123);
    const Chat_History = [
        {
            type: "msg",
            message: "Hi 👋🏻, How are ya ?",
            incoming: true,
            outgoing: false,
            time: "10:00 PM",
        },
        {
            type: "divider",
            text: "Today",
        },
        {
            type: "msg",
            message: "Hi 👋 Panda, not bad, u ?",
            incoming: false,
            outgoing: true,
            time: "10:05 AM",
        },
        {
            type: "msg",
            message: "Can you send me an abstarct image?",
            incoming: false,
            outgoing: true,
            time: "10:08 AM",
        },
        {
            type: "msg",
            message: "Ya sure, sending you a pic",
            incoming: true,
            outgoing: false,
            time: "10:10 AM",
        },
        {
            type: "msg",
            subtype: "img",
            message: "Here You Go",
            img: faker.image.url(),
            incoming: true,
            outgoing: false,
            time: "10:15 AM",
        },
        {
            type: "msg",
            message: "Can you please send this in file format?",
            incoming: false,
            outgoing: true,
            time: "10:20 AM",
        },
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
            time: "10:25 AM",
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
            time: "10:30 AM",
        },
        {
            type: "msg",
            subtype: "reply",
            reply: "This is a reply",
            message: "Yep, I can also do that",
            incoming: false,
            outgoing: true,
            time: "10:35 AM",
        }
    ];
    const setType = sidebarStore((state) => state.setType);
    return (
        <div className='flex flex-col w-full h-full gap-6'>

            {/* Header */}
            <div>
                <div className='flex items-center w-full h-20 gap-8 px-4 text-black shadow'>
                    <button type='button' onClick={() => (setType("CONTACT"))}><ArrowLeft size={25} /></button>
                    <span>Starred Messages</span>
                </div>
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-scroll hide-scrollbar'>

                <div className='flex'>
                    <div className='flex flex-col w-full gap-4 p-4'>

                        {Chat_History.map((chat) => {
                            if (chat.type === 'msg') {
                                if (chat.subtype === 'doc') {
                                    return (<DocMsg msg={{ docName: "Abstract.png", txt: chat.message, incoming: chat.incoming, time: chat.time, options: false }} />)
                                }
                                else if (chat.subtype === 'img') {
                                    return (<MediaMsg msg={{ url: chat.img, txt: chat.message, incoming: chat.incoming, time: chat.time, options: false }} />)
                                }
                                else if (chat.subtype === 'link') {
                                    return (<LinkMsg msg={{ link: chat.link, txt: chat.message, incoming: chat.incoming, time: chat.time, options: false }} />)
                                }
                                else if (chat.subtype === 'reply') {
                                    return (<ReplyMsg msg={{ txt: chat.message, reply: chat.reply, incoming: chat.incoming, time: chat.time, options: false }} />)
                                }
                                else {
                                    return (<TextMessage msg={{ txt: chat.message, incoming: chat.incoming, time: chat.time, options: false }} />)
                                }
                            }
                            else {
                                return <TimeLine date={chat.text} />
                            }
                        })}
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Starred