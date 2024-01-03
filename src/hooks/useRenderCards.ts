import { useState, useEffect } from "react";
import { RawApiData } from "../types";
import { getNDaysBack } from "../utils";
import { getApodData } from "../api";

export const useRenderCards = ( isInViewport : boolean ) => {
    const [ data, setData ] = useState<RawApiData[]>([]);
    const [ page, setPage ] = useState<number>(1);
    const [ isLoading, setLoading ] = useState<boolean>(false);
  
    useEffect(() => {
      setLoading(true);
  
      const endDate = new Date();
      const startDate = getNDaysBack(endDate, 23);
  
      getApodData(startDate, endDate)
      .then(json => { setData(json); setLoading(false); });
    }, []);
  
    useEffect(() => {
      if(isLoading || !isInViewport) return;
  
      setLoading(true);
  
      const initialDate = new Date();
      const endDate = getNDaysBack(initialDate, 23 * page);
      const startDate = getNDaysBack(endDate, 23);
  
      getApodData(startDate, endDate)
      .then(json => { setData(prev => [...prev, ...json]); setLoading(false); });
    }, [page, isLoading, isInViewport]);
  
    useEffect(() => {
      if(isLoading || !isInViewport) return;
      setPage(page => page + 1);
    }, [isLoading, isInViewport]);
  
    return { data, isLoading };
};