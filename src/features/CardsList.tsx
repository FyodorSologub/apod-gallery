import { cardsList } from "../types";
import { Card, CardLoading } from "../components";

export const CardsList : React.FC<cardsList> = ({ data, reference, isLoading }) : JSX.Element => {
  return (
    <main className='h-auto mt-20 px-4 py-2 md:p-5 md:py-6 flex justify-center bg-slate-100'>
        <section className='h-full max-h-full w-full md:w-4/5 md:max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 grid-rows-auto gap-3 lg:gap-5 py-3 lg:py-5'>
        { data.map((obj, id) => {
            if(data.length === id + 1) {
              return <Card reference={reference} explanation={obj.explanation} title={obj.title} url={obj.url} key={id} date={ obj.date } />
            }
            return <Card explanation={obj.explanation} title={obj.title} url={obj.url} key={id} date={ obj.date } />
        }) }
        { isLoading === true && [1,2,3,4,5,6,7,8,9,10,11,12].map(id => <CardLoading key={ id } />) }
        </section>
    </main>
  );
};
