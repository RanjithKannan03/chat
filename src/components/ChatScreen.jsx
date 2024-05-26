import React from 'react';
import { DocMsg, MediaMsg, TextMessage, TimeLine } from './Message';
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
                            <TextMessage msg={{ txt: "Hello", incoming: true, time: "9:36" }} />
                            <TextMessage msg={{ txt: "Hi 👋 , how are you?", incoming: false, time: "10:00" }} />
                            <MediaMsg msg={{ url: faker.image.url(), incoming: false, txt: "This is a cat", time: "11:30" }} />
                            <MediaMsg msg={{ url: faker.image.url(), incoming: false, time: "11:50" }} />
                            <DocMsg msg={{ docName: "Abstract.png", incoming: true, time: "2:00" }} />
                            <TimeLine date="Today" />
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