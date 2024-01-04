import { useSearchParams } from 'react-router-dom';

export const CardDetailes = () => {
  const [ searchParams ] = useSearchParams();

  return (
    <>
      <h1>{ searchParams.get('title') }</h1>
      <p>{ searchParams.get('explanation') }</p>
    </>
  )
};
