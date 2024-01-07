import { CardProps } from '../types/index';
import { useRedirect } from '../hooks';
import arrowRight from '../assets/arrow-right.svg';

export const Card : React.FC<CardProps> = ({ explanation, title, url, reference, date, media_type, }) : JSX.Element => {
    const handleRedirect = useRedirect(`/card/?date=${ date }`);

    return (
        <article ref={reference} className="border border-slate-900 shadow-lg bg-white rounded-md w-full h-24 px-5 py-3 flex gap-x-3 relative group items-center transition-all snap-always snap-center">
            { media_type === 'image' && <img className="w-16 h-16 aspect-square rounded-full group-hover:blur-[1px]" src={ url } alt="?" /> }
            { media_type === 'video' && <p className="w-16 h-16 bg-slate-950 aspect-square rounded-full group-hover:blur-[1px] flex justify-center items-center"><img  className='w-8 h-8' src={ arrowRight } /></p> }
            <div className="flex flex-col w-full gap-0 overflow-hidden">
                <h2 className="w-full max-h-10 rounded-sm text-lg antialiased font-thin truncate shrink-0 group-hover:blur-[1px]">{ title }</h2>
                <small className="w-full h-full max-h-full rounded-sm text-sm antialiased font-thin group-hover:blur-[1px] line-clamp-2">{ explanation }</small>
            </div>
            <button onClick={ handleRedirect } className="absolute w-full h-full top-0 left-0 text-md antialiased font-light rounded-md justify-center items-center bg-slate-50 text-slate-900 opacity-90 hidden group-hover:flex transition-all">see more</button>
        </article>
    );
};