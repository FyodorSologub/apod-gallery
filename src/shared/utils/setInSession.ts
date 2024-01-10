import { rawApiData } from "../types";

export const setInSession = ( data: rawApiData[] ) => {
    const dataAsString = JSON.stringify(data);
    sessionStorage.setItem('data', dataAsString);
};