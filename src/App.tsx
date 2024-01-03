import { useRef, useState } from 'react';
import { useRenderCards, useIntersection } from './hooks';
import { Header, CardsList } from './features';
import { ScrollTop } from './components';

export function App() {
  const lastCard = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(lastCard, '0px');
  const { data, isLoading } = useRenderCards(isInViewport);
  const [ scrolled, setScrolled ] = useState<boolean>(false);

  const handleScroll = () => {
    if(!container.current) return;
    container.current.scrollTop > 400 ? setScrolled(true) : setScrolled(false);
  };

  return (
    <div ref={container} onScroll={handleScroll} className='h-screen overflow-auto'>
      <Header />
      <CardsList data={data} reference={lastCard} isLoading={isLoading} />
      <ScrollTop container={container} scrolled={scrolled} />
    </div>
  );
}