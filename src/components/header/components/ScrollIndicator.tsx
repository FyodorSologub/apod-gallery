import { scrollIndicatorProps } from "../types/scrollIndicatorProps";

export const ScrollIndicator : React.FC<scrollIndicatorProps> = ({ scrolled, hasScrollIndicator }) => {
    return (
        hasScrollIndicator 
        &&         
        <p className='h-2 w-full bg-slate-300'>
            <span className='h-full block bg-slate-700 transition-all ease-out' style={{ width: `${scrolled}%` }}></span>
        </p>
    );
};

