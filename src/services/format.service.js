import { format } from 'date-fns';

export const capitalizeFirstLetterOfEachWord = (string) => {
    return string.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
}

const monthDayYear = 'MMMM dd, yyyy';
export const formatDate = (date) => {
    if (date) return format(new Date(date), monthDayYear);
    return null;
}

const shortMonthDayYear = 'MMM dd, yyyy';
export const formatShortDate = (date) => {
    return format(new Date(date), shortMonthDayYear);
}