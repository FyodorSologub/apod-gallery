import { useEffect, useRef, useState } from 'react';
import { useRenderCards, useIntersection } from '../hooks';
import { Header, CardsList, ScrollTop } from '../features';

export function Home() {
  const lastCard = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(lastCard, '0px');
  const { data, isLoading } = useRenderCards(isInViewport);
  const [ scrolled, setScrolled ] = useState<boolean>(false);
  const [ scrolledPercent, setScrolledPercent ] = useState<number>(0);

  const handleScroll = () => {
    if(!container.current) return;
    container.current.scrollTop > 400 ? setScrolled(true) : setScrolled(false);
    setScrolledPercent(container.current.scrollTop / ( container.current.scrollHeight * 0.01 ));
  };

  useEffect(() => {
    if(!container.current) return;
    setScrolledPercent(container.current.scrollTop / ( container.current.scrollHeight * 0.01 ));
  }, [data]);

  return (
    <div ref={container} onScroll={handleScroll} className='h-screen overflow-auto'>
      <Header scrolled={scrolledPercent} />
      <CardsList data={data} reference={lastCard} isLoading={isLoading} />
      <ScrollTop container={container} scrolled={scrolled} />
    </div>
  );
}