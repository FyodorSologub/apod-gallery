import { cardExpandedProps } from '../types/index';
import Avatar from '../assets/avatar.svg';

export const CardExpanded : React.FC<cardExpandedProps>= ({ url, title, explanation, copyright }) => {
  return (  
    <article className='w-full h-full border rounded-md border-slate-900 shadow-lg bg-slate-100 p-3 md:p-5 grid grid-cols-1 md:grid-cols-2 grid-rows-12'>
      <h2 className='w-auto h-auto text-center rounded-md text-md lg:text-xl antialiased font-extralight shrink-0 col-span-1 md:col-span-2 row-start-1 row-end-2'>{ title }</h2>
      <div className='border rounded-md border-slate-200 col-span-1 row-start-2 row-end-7 md:row-start-2 md:row-end-13 relative'>
        <img className='h-full w-full aspect-square rounded-md object-cover' src={ url } />
        { copyright &&
          <div className='w-fit h-auto flex gap-x-1 md:gap-x-2 items-center justify-center shrink-0 absolute border bg-slate-950 px-2 lg:px-3 py-1 lg:py-2 rounded-md top-2 right-2'>
            <img className='w-3 lg:w-5 h-auto rounded-full lg:mt-[0.1rem] bg-slate-100' src={ Avatar } />
            <p className='w-auto h-full rounded-md antialiased text-sm lg:text-base font-thin truncate shrink-0 text-slate-100'>{ copyright }</p>
          </div>
        }
      </div>
      <small className='w-auto h-auto flex items-center overflow-hidden max-h-full text-xs lg:text-base antialiased font-extralight text-justify col-span-1 md:col-span-2 row-start-7 row-end-13 md:row-start-2 md:row-end-13 md:px-5'>{ explanation }</small>
    </article>
  )
};