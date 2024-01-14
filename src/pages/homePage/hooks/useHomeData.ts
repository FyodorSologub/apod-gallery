import { useEffect, useState } from 'react';
import { useRenderCards, useIntersection } from '.';

export const useHomeData = (lastCard : React.RefObject<HTMLElement>, container : React.RefObject<HTMLDivElement>) => {
    const isInViewport = useIntersection(lastCard, '0px');
    const { dataFiltered, isLoading } = useRenderCards(isInViewport);
    const [ scrolled, setScrolled ] = useState<boolean>(false);
    const [ scrolledPercent, setScrolledPercent ] = useState<number>(0);
  
    useEffect(() => {
      if(!container.current) return;
      setScrolledPercent(container.current.scrollTop / ( container.current.scrollHeight * 0.01 ));
    }, [container, dataFiltered, isLoading]);
  
    return { dataFiltered, isLoading, scrolled, setScrolled, scrolledPercent, setScrolledPercent };
};