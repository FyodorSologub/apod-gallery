import { useRef } from 'react';
import { Header, CardsList, ScrollTop } from '../features';
import { handleScroll } from '../utils';
import { useHomeData } from '../hooks';

export function Home() {
  const lastCard = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const { data, isLoading, scrolled, setScrolled, scrolledPercent, setScrolledPercent } = useHomeData(lastCard, container);

  return (
    <div ref={container} onScroll={() => handleScroll(container, setScrolled, setScrolledPercent) } className='h-screen overflow-auto'>
      <Header scrolled={scrolledPercent} hasScrollIndicator={ true } />
      <CardsList data={data} reference={lastCard} isLoading={isLoading} />
      <ScrollTop container={container} scrolled={scrolled} />
    </div>
  );
}