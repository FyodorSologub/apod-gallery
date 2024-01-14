export const stringifyDate = (date : Date) => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1 >= 10 ? date.getUTCMonth() + 1 : '0' + String(date.getUTCMonth() + 1);
    const day = date.getUTCDate() >= 10 ? date.getUTCDate() : '0' + String(date.getUTCDate());
    return `${ year }-${ month }-${ day }`;
};