import { cardsRendererProps } from "../types/cardsRendererProps";
import { cardsLoadingRendererProps } from "../types/cardsLoadingRendererProps";
import { CardShort, CardShortLoading } from "./CardShort";

export const CardsRenderer : React.FC<cardsRendererProps> = ({ data, reference }) => {
  return (
    data.map((obj, id) => {
        switch(data.length === id + 1) {
            case true:
                return <CardShort reference={reference} explanation={obj.explanation} title={obj.title} url={obj.url} key={id} date={ obj.date } media_type={ obj.media_type } />;
            case false:
                return <CardShort explanation={obj.explanation} title={obj.title} url={obj.url} key={id} date={ obj.date } media_type={ obj.media_type } />;
        }
    })
  )
};

export const CardsLoadingRenderer : React.FC<cardsLoadingRendererProps> = ({ isLoading }) => {
  return (
    isLoading && [1,2,3,4,5,6,7,8,9,10,11,12].map(id => <CardShortLoading key={ id } />)
  );
};