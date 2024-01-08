import { getFromSession } from ".";

export const checkInSessionByDate = (date : Date) => {
    const sessionData = getFromSession();
    if(!sessionData) return false;
    const dateParsed = `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1) >= 10 ? (date.getUTCMonth() + 1) : `0${(date.getUTCMonth() + 1)}`}-${date.getUTCDate() >= 10 ? date.getUTCDate() : `0${date.getUTCDate()}`}`;
    const result = !!sessionData.filter(obj => obj.date === dateParsed).length;
    return result;
};