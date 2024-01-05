import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { RawApiData } from "../types";
import { getApodData } from "../api";
import { Header } from '../features';


export const CardDetailes = () => {
  const [ searchParams ] = useSearchParams();
  const [ data, setData ] = useState<RawApiData[]>([]);
  const [ isLoading, setLoading ] = useState<boolean>(false);

  useEffect(() => {
    if(!searchParams || searchParams.get('date') === null) return;
    setLoading(true);
    const dateParam = searchParams.get('date') as string;
    const endDate = new Date(dateParam);
    const startDate = endDate

    getApodData(startDate, endDate)
    .then(json => { setData(json); setLoading(false); });
  }, [searchParams]);

  return (
    <div className='h-screen overflow-hidden pt-20'>
      <Header scrolled={0} />
      <main className='h-full p-5 flex justify-center bg-slate-10'>
        <section className='h-full snap-y snap-mandatory max-h-full w-4/5 max-w-[1000px] flex justify-center items-center gap-5 py-3 lg:py-5'>
          { isLoading && 
            <article className='w-2/4 h-full border rounded-md border-slate-900 shadow-lg bg-white flex flex-col gap-y-3 p-5 animate-pulse'>
              <div className='w-full aspect-square rounded-md bg-slate-200'></div>
              <h2 className='w-full bg-slate-200 h-7 rounded-md'></h2>
              <p className='w-full bg-slate-200 h-20 rounded-md'></p>
              <div className='w-full flex gap-x-3 h-7'>
                <p className='w-7 h-full bg-slate-200 rounded-full'></p>
                <p className='w-full h-full bg-slate-200 rounded-md'></p>
              </div>
            </article>
          }
          { data[0] !== undefined && 
              <article className='w-2/4 h-full border rounded-md border-slate-900 shadow-lg bg-white flex flex-col gap-y-3 p-5'>
                <img className='w-full aspect-square rounded-md object-cover' src={ data[0].url } />
                <h2 className='w-auto h-7 rounded-md text-lg antialiased font-thin truncate shrink-0'>{ data[0].title }</h2>
                <p className='w-auto h-full rounded-md overflow-hidden max-h-full text-sm antialiased font-thin'>{ data[0].explanation.slice(0, 275) + '...' }</p>
                <div className='w-full flex gap-x-3 h-7 items-center shrink-0'>
                  <p className='w-7 h-full bg-slate-200 rounded-full'></p>
                  <p className='w-auto h-full rounded-md text-lg antialiased font-thin truncate shrink-0'>{ data[0].copyright }</p>
                </div>
              </article>
          }
        </section>
      </main>
    </div>
  )
};

/*
 { isLoading && 
          <article className='w-2/4 h-full border rounded-md border-slate-900 shadow-lg bg-white flex flex-col gap-y-3 p-5 animate-pulse'>
            <div className='w-full aspect-square rounded-md bg-slate-200'></div>
            <h2 className='w-full bg-slate-200 h-7 rounded-md'></h2>
            <p className='w-full bg-slate-200 h-20 rounded-md'></p>
            <div className='w-full flex gap-x-3 h-7'>
              <p className='w-7 h-full bg-slate-200 rounded-full'></p>
              <p className='w-full h-full bg-slate-200 rounded-md'></p>
            </div>
          </article>
  }
          { !isLoading && 
              <article className='w-2/4 h-full border rounded-md border-slate-900 shadow-lg bg-white flex flex-col gap-y-3 p-5'>
                <img className='w-full aspect-square rounded-md' src= />
                <h2 className='w-full bg-slate-200 h-7 rounded-md'></h2>
                <p className='w-full bg-slate-200 h-20 rounded-md'></p>
                <div className='w-full flex gap-x-3 h-7'>
                  <p className='w-7 h-full bg-slate-200 rounded-full'></p>
                  <p className='w-full h-full bg-slate-200 rounded-md'></p>
                </div>
            </article>
          }
*/