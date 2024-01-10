import { cardsList } from "./types";
import { CardsRenderer, CardsLoadingRenderer } from "./Cardsrenderer";

export const CardShortList : React.FC<cardsList> = ({ data, reference, isLoading }) : JSX.Element => {
  return (
    <main className='h-auto mt-20 px-4 py-2 md:p-5 md:py-6 flex justify-center bg-slate-100'>
        <section className='h-full max-h-full w-full md:w-4/5 md:max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 grid-rows-auto gap-3 lg:gap-5 py-3 lg:py-5'>
            <CardsRenderer data={ data } reference={ reference } />
            <CardsLoadingRenderer isLoading={ isLoading } />
        </section>
    </main>
  );
};
