import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { rawApiData } from "../../../shared/types";
import { getApodData } from "../../../shared/api";
import { getFromSession, checkInSessionByDate } from "../../../shared/utils";

const setInSessionX = ( data: rawApiData[] ) => {
  const dataX = JSON.stringify(data);
  sessionStorage.setItem('dataX', dataX);
};

const getFromSessionX = () => {
  const data = sessionStorage.getItem('dataX');
  if(!data) return null;
  const result =  JSON.parse(data) as rawApiData[];
  return result as rawApiData[];
};

const checkInSessionXByDate = ( date: Date ) => {
  const data = sessionStorage.getItem('dataX');
  if(!data) return false;
  const result = JSON.parse(data) as rawApiData[];
  if(new Date(result[0].date).getTime() !== date.getTime()) return false;
  return true;
};

const getFromSessionByDate = ( date : string ) => {
  const data = getFromSession();
  const dataX = getFromSessionX();

  const isInSession = data && checkInSessionByDate(new Date(date), data);
  const isInSessionX = checkInSessionXByDate(new Date(date));

  if(!isInSession && !isInSessionX) return null;

  if(isInSessionX && dataX) { 
    return dataX;
  }

  if(isInSession && data) {
    const result = data.filter(obj => new Date(obj.date).getTime() === new Date(date).getTime());

    if(!result.length) return null;
    return result as rawApiData[];
  }
};

export const useGetCardDetailsData = () => {
    const [ searchParams ] = useSearchParams();
    const [ data, setData ] = useState<rawApiData[]>([]);
    const [ isLoading, setLoading ] = useState<boolean>(false);

    useEffect(() => {
      if(!searchParams || searchParams.get('date') === null) return;
      setLoading(true);
      const dateParam = searchParams.get('date') as string;

      const sessionObj = getFromSessionByDate(dateParam);
      if(sessionObj) {
        setData(sessionObj);
        setLoading(false);
      }
      if(!sessionObj) {
        const endDate = new Date(dateParam);
        const startDate = endDate
    
        getApodData(startDate, endDate)
        .then(json => { setData(json); setInSessionX(json); setLoading(false); });
      }
    }, [searchParams]);
  
    return { data: data[0], isLoading } 
  };