import { CardDetailsContainer } from '../../../features/cardDetails';
import { Header } from '../../../features/header';

export const CardDetailsPage = () => {
  return (
    <div className='h-screen overflow-hidden pt-20'>
      <Header scrolled={ 0 } hasScrollIndicator={ false } />
      <CardDetailsContainer />
    </div>
  )
};