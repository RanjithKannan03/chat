import React from 'react';
import { DocMsg, MediaMsg, TextMessage, TimeLine } from './Message';
import { faker } from '@faker-js/faker';
import Footer from './Footer';
import Header from './Header';

const ChatScreen = () => {
    return (
        <div className='w-full h-full'>

            <div className='flex flex-col'>
                {/* Header */}
                <div>
                    <Header />
                </div>

                {/* Chat */}
                <div className='w-full h-[calc(100vh-10rem)] bg-[#F0F4FA] overflow-y-scroll'>

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