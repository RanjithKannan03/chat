import React from 'react'
import { LinkMsg } from './Message';

const Links = () => {


    const Shared_links = [
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: false,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
        },
        {
            type: "msg",
            subtype: "link",
            link: "youtube.com/watch?v=UfvRRIindQ8",
            message: "Yep, I can also do that",
            incoming: true,
            outgoing: false,
        },
    ];

    return (
        <div className='h-full w-full p-4 flex flex-col gap-8'>
            {Shared_links.map((link) => {
                return (
                    <div className='w-full'>
                        <LinkMsg msg={{ link: link.link, txt: link.message, incoming: link.incoming, time: link.time }} />
                    </div>
                )
            })}
        </div>
    )
}

export default Links