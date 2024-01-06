export const CardExpandedLoading = () => {
  return (
    <article className='w-2/4 h-full border rounded-md border-slate-900 shadow-lg bg-white flex flex-col gap-y-3 p-5 animate-pulse'>
        <div className='w-full aspect-square rounded-md bg-slate-200'></div>
            <h2 className='w-full bg-slate-200 h-7 rounded-md'></h2>
            <p className='w-full bg-slate-200 h-20 rounded-md'></p>
        <div className='w-full flex gap-x-3 h-7'>
            <p className='w-7 h-full bg-slate-200 rounded-full'></p>
            <p className='w-full h-full bg-slate-200 rounded-md'></p>
        </div>
    </article>
  )
};
