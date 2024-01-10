import Avatar from '../../../assets/avatar.svg';
import { ImageLabelProps } from '../types/ImageLabelProps';

export const ImageLabel : React.FC<ImageLabelProps> = ({ copyright }) => {
  return (
    copyright 
    &&
    <div className='w-fit h-auto flex gap-x-1 md:gap-x-2 items-center justify-center shrink-0 absolute border bg-slate-950 px-2 lg:px-3 py-1 lg:py-2 rounded-md top-2 right-2'>
        <img className='w-3 lg:w-5 h-auto rounded-full lg:mt-[0.1rem] bg-slate-100' src={ Avatar } />
        <p className='w-auto h-full rounded-md antialiased text-sm lg:text-base font-thin truncate shrink-0 text-slate-100'>{ copyright }</p>
    </div>
  )
};
