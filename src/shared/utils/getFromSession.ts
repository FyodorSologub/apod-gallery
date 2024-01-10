import { rawApiData } from "../../shared/types";

export const getFromSession = () => {
    const data = sessionStorage.getItem('data');
    if(!data) return null;
    const result =  JSON.parse(data) as rawApiData[];
    const resultSorted = result.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return resultSorted;
};