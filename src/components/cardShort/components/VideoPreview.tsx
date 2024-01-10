import arrowRight from '../../../assets/arrow-right.svg';

export const VideoPreview = () => {
  return (
    <p className="w-16 h-16 bg-slate-950 aspect-square rounded-full group-hover:blur-[1px] flex justify-center items-center">
        <img className='w-8 h-8' src={ arrowRight } />
    </p>
  )
};
