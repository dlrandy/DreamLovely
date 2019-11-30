import moment from 'moment-timezone';

const timeFormatSAtring: string = 'YYYY-MM-DD HH:mm:ss';
export const currentTimezone = moment.tz.guess(true);
console.log(currentTimezone, 'currentTimezone');
export const getTimestampWithTimezone = (
  date: Date,
  timezone: string
): number => {
  return moment.tz(moment(date).format(timeFormatSAtring), timezone).valueOf();
};

export const getDateFromTimeStamp_Zone = (
  timestamp: number,
  timezone?: string
): Date => {
  return moment.tz(timestamp, currentTimezone).toDate();
};

export const addDateTime = (
  timestamp: number,
  addNum: any,
  type: string,
  timeszone?: string
): Date => {
  return moment
    .tz(
      moment(getDateFromTimeStamp_Zone(timestamp))
        .add(addNum, type)
        .valueOf(),
      timeszone || currentTimezone
    )
    .toDate();
};

export const b64EncodeUnicode = (str: string) => {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(
      match,
      p1
    ) {
      return String.fromCharCode((('0x' + p1) as any) as number);
    })
  );
};


export const getDateSpecificTimezone = (timestamp: number, timezone: string):Date => {
  return moment(moment(timestamp).tz(timezone).format('YYYY-MM-DD HH:mm:ss')).toDate();
  // Tue May 21 2019 21:50:33 GMT+0800 (China Standard Time)
  // moment(1558489833596).tz("US/Eastern").toDate();
};

export function getLocalTimezone():string {
  let dateString = new Date().toString();
  var tmpIndex = dateString.indexOf('GMT');
  var timezone, timezoneSignal, timezoneFirstPart,timezoneSecondPart;
  if (dateString[tmpIndex - 1] == ' ' && dateString[tmpIndex + 8] == ' ') {
    timezoneSignal = dateString[tmpIndex + 3];
    timezoneFirstPart = dateString.substr(tmpIndex + 4, 2);
    timezoneSecondPart = dateString.substr(tmpIndex + 6, 2);
    timezone =
      'GMT' +
      timezoneSignal +
      timezoneFirstPart +
      '' +
      timezoneSecondPart;
  }
  return timezone as string;
}
