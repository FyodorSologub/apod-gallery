import ArrowUp from '../assets/arrow_up.svg';
import { scrollButtonProps } from '../types';
import { handleGoTop } from '../utils';

export const ScrollTop : React.FC<scrollButtonProps> = ({ container, scrolled }) => {
  return (
    <>
      { scrolled && 
        <button onClick={() => handleGoTop(container)} className="fixed flex justify-center items-center bottom-10 right-20 w-16 h-16 bg-slate-100 border border-slate-900 rounded-full hover:opacity-50 transition-all ease-in-out">
          <img className='' src={ ArrowUp } />
        </button> 
      }
    </>
  );
};
