import React from 'react';
import Image from 'next/image';
import { faker } from '@faker-js/faker';

const Media = () => {
    const mediaData = [
        {
            date: "28th MAY 24",
            images: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
            date: "29th MAY 24",
            images: [0, 1, 2, 3, 4,]
        },
        {
            date: "30th MAY 24",
            images: [0, 1, 2,]
        },
        {
            date: "31st MAY 24",
            images: [0, 1, 2, 3]
        },
    ]
    faker.seed(123);
    return (
        <div className='h-full w-full p-4 flex flex-col'>
            {mediaData.map((el, index) => {
                return (
                    <div key={index} className='flex flex-col w-full'>
                        <span>{el.date}</span>
                        <div className='grid grid-cols-3 gap-2'>
                            {el.images.map((image, index) => {
                                return (
                                    <div key={index} className='relative w-28 h-28'>
                                        <Image src={faker.image.url()} alt='media' className='object-contain' fill />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Media