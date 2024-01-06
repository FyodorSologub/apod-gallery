import { Header, CardExpandedContainer } from '../features';

export const CardDetailes = () => {
  return (
    <div className='h-screen overflow-hidden pt-20'>
      <Header scrolled={0} hasScrollIndicator={ false } />
      <CardExpandedContainer />
    </div>
  )
};