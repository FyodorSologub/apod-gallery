import { RawApiData } from '../types';
import { BASE_URL, PATH_URL, PARAMS_URL } from '../constants';
import { turnDateToString } from '../utils';

export const getApodData = async (startDate : Date, endDate : Date) : Promise<RawApiData[]> => {  
    const SECRET_KEY = import.meta.env.VITE_APOD_API_KEY as string;
    const PARAMS =  `${ PARAMS_URL.keyParam }=${ SECRET_KEY }&${ PARAMS_URL.startDateParam }=${ turnDateToString(startDate) }&${ PARAMS_URL.endDateParam }=${ turnDateToString(endDate) }`;
    const url = `${ BASE_URL }/${ PATH_URL }?${ PARAMS }`;

    const response = await fetch(url);
    const json = await response.json() as RawApiData[];
    return json;
};