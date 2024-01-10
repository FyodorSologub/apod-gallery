import ArrowUp from '../../../assets/arrow_up.svg';
import { scrollButtonProps } from '../types/scrollButtonProps';
import { handleGoTop } from '../utils/handleGoTop';

export const ScrollTopButton : React.FC<scrollButtonProps> = ({ container, scrolled }) => {
  return (
    scrolled 
    && 
    <button onClick={() => handleGoTop(container)} className="fixed flex justify-center items-center bottom-3 lg:bottom-10 right-3 md:right-5 lg:right-20 w-16 h-16 bg-slate-900 lg:bg-slate-100 border border-slate-900 rounded-full hover:opacity-50 transition-all ease-in-out">
        <img className='bg-white rounded-md lg:bg-transparent' src={ ArrowUp } />
    </button> 
  );
};
