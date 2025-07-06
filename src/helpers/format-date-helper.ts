import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export function currentDateInSeconds(): number {
    return dayjs().tz('America/Bogota').unix();
}

export function generateExpiresAtInSeconds(minutesToAdd: number): number {
    return dayjs().add(minutesToAdd, 'minute').unix();
}

export function formatDateInSpanish(seconds: number): string {
    return dayjs.unix(seconds).tz('America/Bogota').format('D [de] MMMM [de] YYYY');
}

export function getWompiExpiresAt(minutes: number): string {
    return dayjs().tz('America/Bogota').add(minutes, 'minute').utc().format('YYYY-MM-DDTHH:mm:ss[.000Z]');
}

export function dateIsoToUnixSeconds(isoDate: string): number {
    return dayjs(isoDate).unix();
}