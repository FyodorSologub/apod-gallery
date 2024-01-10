import React from 'react'

type titileProps = {
    title: string,
};

export const Title : React.FC<titileProps> = ({ title }) => {
  return (
    <h2 className='w-auto h-auto text-center rounded-md text-md antialiased font-extralight shrink-0 col-span-1 md:col-span-2 row-start-1 row-end-2'>
        { title }
    </h2>
  )
};
