import { headerProps } from '../types/headerProps';
import { NavBar, ScrollIndicator } from '../../../components/header';

export const Header : React.FC<headerProps> = ({ scrolled, hasScrollIndicator=false }) => {
    return (
        <header className='absolute top-0 left-0 w-full z-50'>
            <NavBar />
            <ScrollIndicator scrolled={scrolled} hasScrollIndicator={hasScrollIndicator} />
        </header>
    );
};