import { rawApiData } from "../../../shared/types";

export type cardsList = {
    data : rawApiData[],
    reference : React.RefObject<HTMLElement>,
    isLoading : boolean,
};