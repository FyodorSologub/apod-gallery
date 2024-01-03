import { useRef } from 'react';
import { useRenderCards, useIntersection } from './hooks';
import { Header, CardsList } from './features';

export function App() {
  const lastCard = useRef<HTMLElement>(null);
  const isInViewport = useIntersection(lastCard, '0px');
  const { data, isLoading } = useRenderCards(isInViewport);

  return (
    <div className='h-screen overflow-auto'>
      <Header />
      <CardsList data={data} reference={lastCard} isLoading={isLoading} />
    </div>
  );
}//fef