import { RawApiData } from "./index";

export type cardsList = {
    data : RawApiData[],
    reference : React.RefObject<HTMLElement>,
    isLoading: boolean,
};