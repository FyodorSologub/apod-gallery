import { cardsList } from "../types";
import { Card, CardLoading } from "../components";

export const CardsList : React.FC<cardsList> = ({ data, reference, isLoading }) : JSX.Element => {
  return (
    <main className='h-auto p-5 flex justify-center bg-slate-100'>
        <section className='h-auto w-4/5 max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 grid-rows-auto gap-5 pt-3 lg:pt-5 mb-5'>
        { data.map((obj, id) => {
            if(data.length === id + 1) {
            return <Card reference={reference} explanation={obj.explanation} title={obj.title} url={obj.url} key={id} />
            }
            return <Card explanation={obj.explanation} title={obj.title} url={obj.url} key={id} />
        }) }
        { isLoading === true && [1,2,3,4,5,6,7,8,9,10,11,12].map(id => <CardLoading key={ id } />) }
        </section>
    </main>
  );
};
