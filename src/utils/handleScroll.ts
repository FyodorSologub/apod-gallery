export const handleScroll = (
    container : React.RefObject<HTMLDivElement>, 
    setScrolled : React.Dispatch<React.SetStateAction<boolean>>,
    setScrolledPercent: React.Dispatch<React.SetStateAction<number>>,
    ) => {
    if(!container.current) return;
    container.current.scrollTop > 400 ? setScrolled(true) : setScrolled(false);
    setScrolledPercent(container.current.scrollTop / ( container.current.scrollHeight * 0.01 ));
};