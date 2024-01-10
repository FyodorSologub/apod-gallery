import { rawApiData } from "../../../shared/types";

export type cardsRendererProps = {
    data : rawApiData[],
    reference : React.RefObject<HTMLElement>,
};