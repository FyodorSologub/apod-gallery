import { useRef } from 'react';
import { Header } from '../../../features/header';
import { CardShortList } from '../../../features/cardShortList';
import { ScrollTopButton } from '../../../features/scrollTopButton';
import { handleScroll } from '../utils';
import { useHomeData } from '../hooks';

export function HomePage() {
  const lastCard = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const { dataFiltered, isLoading, scrolled, setScrolled, scrolledPercent, setScrolledPercent } = useHomeData(lastCard, container);

  return (
    <div ref={container} onScroll={() => handleScroll(container, setScrolled, setScrolledPercent) } className='h-screen overflow-auto'>
      <Header scrolled={ scrolledPercent } hasScrollIndicator={ true } />
      <CardShortList data={ dataFiltered } reference={lastCard} isLoading={ isLoading } />
      <ScrollTopButton container={ container } scrolled={ scrolled } />
    </div>
  );
}