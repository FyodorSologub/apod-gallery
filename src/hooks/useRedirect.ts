import { useNavigate } from 'react-router-dom';

export const useRedirect = ( path: string ) => {
    const navigate = useNavigate();
    return () => navigate(path);
};