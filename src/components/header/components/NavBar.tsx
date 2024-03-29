import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='w-full h-20 bg-slate-900 px-5 py-2 flex items-center justify-between'>
        <Link to="/" className='text-slate-100 w-auto text-md sm:text-lg lg:text-xl antialiased font-extralight flex gap-x-2'>Apod <span className='hidden md:block'>Gallery</span></Link>
        <div className='flex gap-5'>
            <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>API</p>
            <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>About</p>
            <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>Github</p>
        </div>
    </div>
  )
};