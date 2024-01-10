import { explanationContainerProps } from "../types/explanationContainerProps";
import { ExpandButton } from "../../../components/cardDetails";

export const ExplanationContainer : React.FC<explanationContainerProps> = 
({ explanation, isExpanded, setExpanded }) => {
  return (
    <small className={`w-auto h-auto max-h-full text-xs lg:text-base antialiased font-extralight text-justify col-span-1 md:col-span-2 ${ isExpanded ? 'row-start-2 row-end-11 overflow-auto md:px-5' : 'row-start-7 row-end-13 overflow-hidden md:overflow-hidden' } md:row-start-2 md:row-end-11 relative mt-2 md:mt-0 scrollbar-hide`}>
        { explanation }
        <ExpandButton isExpanded={ isExpanded } setExpanded={ setExpanded } />
    </small>
  )
};
