import { rawApiData } from '../types';
import { BASE_URL, PATH_URL, PARAMS_URL } from '../constants';
import { turnDateToISOString } from '../utils';

export const getApodData = async (startDate : Date, endDate : Date) : Promise<rawApiData[]> => {  
    const SECRET_KEY = import.meta.env.VITE_APOD_API_KEY as string;
    const PARAMS =  `${ PARAMS_URL.keyParam }=${ SECRET_KEY }&${ PARAMS_URL.startDateParam }=${ turnDateToISOString(startDate) }&${ PARAMS_URL.endDateParam }=${ turnDateToISOString(endDate) }`;
    const url = `${ BASE_URL }/${ PATH_URL }?${ PARAMS }`;

    const response = await fetch(url);
    const json = await response.json() as rawApiData[];
    const dataSortedByDate = json.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return dataSortedByDate;
};