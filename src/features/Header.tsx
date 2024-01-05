import { ScrollIndicator } from '../components/ScrollIndicator';
import { Link } from 'react-router-dom';

type scrollButtonPropsX = {
    scrolled: number;
}

export const Header : React.FC<scrollButtonPropsX> = ({ scrolled }) => {
    return (
        <header className='absolute top-0 left-0 w-full z-50'>
            <div className='w-full h-20 bg-slate-900 px-5 py-2 flex items-center justify-between'>
                <Link to="/" className='text-slate-100 w-10 sm:w-auto text-md sm:text-lg lg:text-xl antialiased font-extralight'>Apod Gallery</Link>
                <div className='flex gap-5'>
                    <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>API</p>
                    <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>About</p>
                    <p className='text-slate-100 text-md antialiased font-extralight hover:cursor-pointer hover:opacity-70 transition-opacity ease-in-out'>Github</p>
                 </div>
            </div>
            <ScrollIndicator scrolled={scrolled} />
        </header>
    );
};