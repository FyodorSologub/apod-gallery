type scrollButtonPropsX = {
    scrolled: number;
}

export const ScrollIndicator : React.FC<scrollButtonPropsX> = ({ scrolled }) => {
    return (
        <p className='h-2 w-full bg-slate-300'>
            <span className='h-full block bg-slate-700 transition-all ease-out' style={{ width: `${scrolled}%` }}></span>
        </p>
    );
}
