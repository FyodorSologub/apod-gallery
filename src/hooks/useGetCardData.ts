import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { RawApiData } from "../types";
import { getApodData } from "../api";

export const useGetCardData = () => {
    const [ searchParams ] = useSearchParams();
    const [ data, setData ] = useState<RawApiData[]>([]);
    const [ isLoading, setLoading ] = useState<boolean>(false);
  
    useEffect(() => {
      if(!searchParams || searchParams.get('date') === null) return;
      setLoading(true);
      const dateParam = searchParams.get('date') as string;
      const endDate = new Date(dateParam);
      const startDate = endDate
  
      getApodData(startDate, endDate)
      .then(json => { setData(json); setLoading(false); });
    }, [searchParams]);
  
    return { data: data[0], isLoading } 
  };