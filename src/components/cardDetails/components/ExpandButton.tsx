import { expandButtonProps } from "../types/expandButtonProps";

export const ExpandButton : React.FC<expandButtonProps> = ({ isExpanded, setExpanded }) => {
  return (
    <div className={`w-full h-1/3 ${ isExpanded === false ? 'bg-opacity-90 bg-slate-200 bottom-0 absolute' : 'fixed bottom-8 right-0' } flex sm:hidden justify-center items-end`}>
        <button onClick={() => setExpanded(prev => !prev)} className='w-fit h-fit mb-2 border rounded-md flex bg-slate-950 text-slate-50 antialiased text-sm font-thin shrink-0 px-3 py-1'>{ isExpanded ? 'hide' : 'expand' }</button>
    </div>  
  )
};

export const ExpandButtonSecond : React.FC<expandButtonProps> = ({ isExpanded, setExpanded }) => {
  return (
    <div className={`bg-opacity-90 justify-center items-end w-full h-full col-span-2 row-start-12 row-end-12 hidden md:flex`}>
      <button onClick={() => setExpanded(prev => !prev)} className='w-fit h-fit border rounded-md flex bg-slate-950 text-slate-100 antialiased text-sm font-extralight shrink-0 px-3 py-1'>{ isExpanded ? 'hide text' : 'expand text' }</button>
    </div>
  )
};