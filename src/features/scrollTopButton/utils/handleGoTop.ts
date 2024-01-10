export const handleGoTop = (container : React.RefObject<HTMLElement>) => {
    if(!container.current) return;
    container.current.scrollTo({ top: 0, behavior: 'smooth' });
};