
import {DATE} from '../Constants/Constants';

/***
 * Convert timestamp to specific given format
 * @param timestamp
 */
export const convertDateTime = (timestamp) => {
    const dateTime = new Date(timestamp);
    const tmpMonth = dateTime.getMonth();
    const tmpDay = dateTime.getDate();
    const tmpHours = dateTime.getHours();
    const tmpMin = dateTime.getMinutes();

    let hours;
    const min = tmpMin >0 && tmpMin < 10 ? '0' + tmpMin : tmpMin;
    switch (tmpHours) {
        case 0:
            hours = 12 + ":" + min + ' AM';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            hours = tmpHours + ":" + min + ' AM';
            break;

        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            hours = tmpHours - 12 + ":" + min + ' PM';
            break;
        default: console.log('ERROR, get hours for date');
    }

    const month = DATE.MONTH_MAP[tmpMonth];
    const day = tmpDay > 0 && tmpDay < 10 ? '0' + tmpDay : tmpDay;

    return {
        date: month + day,
        time: hours
    }
};