import { cardExpandedProps } from '../types/index';
import Avatar from '../assets/avatar.svg';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export const CardExpanded : React.FC<cardExpandedProps>= ({ url, title, explanation, copyright, media_type }) => {
  const [ isExpanded, setExpanded ] = useState<boolean>(false);
  const [ videoWidth, setVideoWidth ] = useState<number>(0);
  const [ videoHeight, setVideoHeight ] = useState<number>(0);
  const [ windowHeight, setWindowHeight ] = useState<number>(0);
  const videContainer = useRef<HTMLDivElement>(null);

  const handleWindowResize = ( event : Event ) => {
    const target = event.target as typeof window;
    setWindowHeight(target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
        window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if(!videContainer.current) return;
    setVideoWidth(videContainer.current.clientWidth);
    setVideoHeight(videContainer.current.clientHeight);
  }, [ videContainer, windowHeight ]);

  return (  
    <article className='w-full h-full border-2 rounded-md border-slate-900 shadow-lg bg-slate-100 p-3 md:p-5 grid grid-cols-1 md:grid-cols-2 grid-rows-12 relative'>
      <h2 className='w-auto h-auto text-center rounded-md text-md antialiased font-extralight shrink-0 col-span-1 md:col-span-2 row-start-1 row-end-2'>{ title }</h2>
      { media_type === 'image' && 
          <div className={`border ${ isExpanded ? 'hidden' : 'block' } rounded-md border-slate-200 col-span-1 row-start-2 row-end-7 md:row-start-2 md:row-end-13 relative`}>
            <img className='h-full w-full aspect-square rounded-md object-cover' src={ url } />
            { copyright &&
              <div className='w-fit h-auto flex gap-x-1 md:gap-x-2 items-center justify-center shrink-0 absolute border bg-slate-950 px-2 lg:px-3 py-1 lg:py-2 rounded-md top-2 right-2'>
                <img className='w-3 lg:w-5 h-auto rounded-full lg:mt-[0.1rem] bg-slate-100' src={ Avatar } />
                <p className='w-auto h-full rounded-md antialiased text-sm lg:text-base font-thin truncate shrink-0 text-slate-100'>{ copyright }</p>
              </div>
              }
          </div> 
      }
      { media_type === 'video' && 
          <div ref={videContainer} className={`${ isExpanded ? 'hidden' : 'block' } col-span-1 row-start-2 row-end-7 md:row-start-2 md:row-end-13 rounded-md`}>
            <ReactPlayer url={ url } controls={ true } muted={ false } width={ videoWidth } height={ videoHeight } style={{borderRadius: '0.375rem'}} />
          </div>
      }
      <small className={`w-auto h-auto max-h-full text-xs lg:text-base antialiased font-extralight text-justify col-span-1 md:col-span-2 ${ isExpanded ? 'row-start-2 overflow-auto' : 'row-start-7 overflow-hidden md:overflow-auto' } row-end-13 md:row-start-2 md:row-end-13 md:pl-5 relative mt-2 md:mt-0`}>
        { explanation }
        <div className={`w-full h-1/3 absolute bottom-0 ${ isExpanded === false ? 'bg-opacity-90 bg-slate-200' : '' } flex sm:hidden justify-center items-end`}>
          <button onClick={() => setExpanded(prev => !prev)} className='w-fit h-fit mb-2 border rounded-md flex bg-slate-950 text-slate-50 antialiased text-sm font-thin shrink-0 px-3 py-1'>{ isExpanded ? 'hide' : 'expand' }</button>
        </div>
      </small>
    </article>
  )
};