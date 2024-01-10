import { RawApiData } from "../../types";

export type CardProps = {
    readonly explanation : string,
    readonly title : string,
    readonly url : string,
    readonly reference? : React.RefObject<HTMLElement>,
    readonly date: string,
    readonly media_type : 'image' | 'video',
};

export type cardsList = {
    data : RawApiData[],
    reference : React.RefObject<HTMLElement>,
    isLoading : boolean,
};

export type cardsRendererProps = {
    data : RawApiData[],
    reference : React.RefObject<HTMLElement>,
};

export type cardsLoadingRendererProps = {
    isLoading: boolean,
};