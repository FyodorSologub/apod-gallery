import { RawApiData } from "../types";

export const setInSession = ( data: RawApiData[] ) => {
    const dataAsString = JSON.stringify(data);
    sessionStorage.setItem('data', dataAsString);
};