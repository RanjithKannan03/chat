import React from 'react'
import { DocMsg } from './Message';

const Docs = () => {
    const Shared_docs = [
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "doc",
            message: "Yes sure, here you go.",
            incoming: true,
            outgoing: false,
        },
    ];
    return (

        <div className='flex flex-col w-full h-full gap-8 p-4'>
            {Shared_docs.map((chat) => {
                return (
                    <div className='w-full'>
                        <DocMsg msg={{ docName: "Abstract.png", txt: chat.message, incoming: chat.incoming, time: chat.time }} />
                    </div>
                )
            })}
        </div>
    )

}

export default Docs