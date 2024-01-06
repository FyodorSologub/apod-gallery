import { cardExpandedProps } from '../types/index';
import Avatar from '../assets/avatar.svg';

export const CardExpanded : React.FC<cardExpandedProps>= ({ url, title, explanation, copyright }) => {
  return (
    <article className='w-2/4 h-full border rounded-md border-slate-900 shadow-lg bg-white flex flex-col gap-y-3 p-5'>
        <img className='w-full aspect-square rounded-md object-cover' src={ url } />
        <h2 className='w-auto h-7 rounded-md text-lg antialiased font-thin truncate shrink-0'>{ title }</h2>
        <p className='w-auto h-full rounded-md overflow-hidden max-h-full text-sm antialiased font-thin line-clamp-3'>{ explanation }</p>
        <div className='w-full flex gap-x-3 h-7 items-center shrink-0'>
            <img className='w-7 h-full rounded-full' src={ Avatar } />
            <p className='w-auto h-full rounded-md text-lg antialiased font-thin truncate shrink-0'>{ copyright }</p>
        </div>
    </article>
  )
};
