import React from 'react';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMessage, TimeLine } from './Message';
import { faker } from '@faker-js/faker';
import Footer from './Footer';
import Header from './Header';

const ChatScreen = (props) => {
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
    return (
        <div className='w-full h-full'>

            <div className='flex flex-col'>
                {/* Header */}
                <div>
                    <Header name={ChatList[props.selectedID].name} src={ChatList[props.selectedID].img} isOnline={ChatList[props.selectedID].online} />
                </div>

                {/* Chat */}
                <div className='w-full h-[calc(100vh-10rem)] bg-[#F0F4FA] overflow-y-scroll hide-scrollbar'>

                    <div className='flex'>
                        <div className='flex flex-col w-full p-4 gap-4'>

                            {Chat_History.map((chat) => {
                                if (chat.type === 'msg') {
                                    if (chat.subtype === 'doc') {
                                        return (<DocMsg msg={{ docName: "Abstract.png", txt: chat.message, incoming: chat.incoming, time: chat.time, options: true }} />)
                                    }
                                    else if (chat.subtype === 'img') {
                                        return (<MediaMsg msg={{ url: chat.img, txt: chat.message, incoming: chat.incoming, time: chat.time, options: true }} />)
                                    }
                                    else if (chat.subtype === 'link') {
                                        return (<LinkMsg msg={{ link: chat.link, txt: chat.message, incoming: chat.incoming, time: chat.time, options: true }} />)
                                    }
                                    else if (chat.subtype === 'reply') {
                                        return (<ReplyMsg msg={{ txt: chat.message, reply: chat.reply, incoming: chat.incoming, time: chat.time, options: true }} />)
                                    }
                                    else {
                                        return (<TextMessage msg={{ txt: chat.message, incoming: chat.incoming, time: chat.time, options: true }} />)
                                    }
                                }
                                else {
                                    return <TimeLine date={chat.text} />
                                }
                            })}
                        </div>

                    </div>

                </div>

                {/* Footer / Input */}

                <div>
                    <Footer />
                </div>

            </div>

        </div>
    )
}

export default ChatScreen