export type explanationContainerProps = {
    readonly explanation : string,
    readonly isExpanded : boolean,
    readonly setExpanded : React.Dispatch<React.SetStateAction<boolean>>,
};