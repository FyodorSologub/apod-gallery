export const CardExpandedLoading = () => {
  return (
    <article className='w-full h-full border-2 rounded-md border-slate-900 shadow-lg bg-slate-100 p-3 md:p-5 grid grid-cols-1 md:grid-cols-2 grid-rows-12 relative animate-pulse gap-3'>
      <h2 className='bg-slate-200 w-full h-full text-center rounded-md text-md antialiased font-extralight shrink-0 col-span-1 md:col-span-2 row-start-1 row-end-2'></h2>
      <div className={`border block rounded-md border-slate-200 bg-slate-200 col-span-1 row-start-2 row-end-7 md:row-start-2 md:row-end-13 relative`}></div>
      <small className={`bg-slate-200 border rounded-md w-auto h-auto md:flex md:items-center max-h-full text-xs lg:text-base antialiased font-extralight text-justify col-span-1 md:col-span-2 row-start-7 overflow-hidden row-end-13 md:row-start-2 md:row-end-13 md:px-5 relative`}></small>
    </article>
  )
};