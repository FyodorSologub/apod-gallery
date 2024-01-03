export const Header = () => {
    return (
      <header className='sticky top-0 z-50 w-full h-20 bg-slate-900 px-5 py-2 flex items-center justify-between'>
          <h1 className='text-slate-100 w-10 sm:w-auto text-md sm:text-lg lg:text-xl antialiased font-extralight'>Apod Gallery</h1>
          <div className='flex gap-5'>
              <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>API</p>
              <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>About</p>
              <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>Github</p>
          </div>
      </header>
    );
};