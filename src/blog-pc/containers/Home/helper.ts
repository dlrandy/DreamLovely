import moment from 'moment-timezone';

export const formatName = (surveyName:string):string =>{
  let index = surveyName.lastIndexOf('_');
  if(index === -1){
    return surveyName;
  }
  index++;
  let timestamp = new Date(parseInt(surveyName.substring(index)));
  return surveyName.substring(0, index) + moment(timestamp).tz("US/Eastern").format('MMDDYYYY');
   }

   export const formatNameForSubmut = (str:string, timezone: string = "US/Eastern", count:number = 30):string =>{
    return str.substring(0, count)+'_' + moment().tz(timezone).format('MMDDYYYY');
     }
 
export const statusFormatter = (params: any) => {
  const {
    value,
    data: { isDefault },
  } = params;
  let str = '';

  switch (value) {
    case 'A':
      str = isDefault === 'Y' ? 'Active(Default)' : 'Active';
      break;
    case 'S':
      str = 'Saved';
      break;
    case 'I':
      str = isDefault === 'Y' ? 'Closed(Default)' : 'Closed';
      break;
    default:
      str = value;
  }
  return str;
};
export const extIntFormatter = (params: any) => {
  const {
    value,
  } = params;
  return value ?  'INT' : 'EXT'
};

export const hiddenFormatter = (params: any) => {
  const { value } = params;
  let str = '';
  str = 'N' === value ? 'Viewable' : 'Hidden';
  return str;
};

export const formatTimeWithMoment = (time: number, format: string = 'MMM D, YYYY, h:mm:ss A') => {
  return moment(time).format(format);
};
export const formatTime = ({value:time}:any) => {
 console.log('time', time)
  return time ? (new Date(time).toLocaleString()): 'None';
};

export const deadlineFormatter = (params: any) => {
  const { value } = params;
  let str = '';
  str = 0 === value ? 'None' : new Date(value).toLocaleString();
  return str;
};

const statusmap: { [key: string]: number } = {
  A: 1,
  S: 2,
  I: 3,
};

export const statusComparator = (param1: string, param2: string) => {
  console.log(statusmap[param1] - statusmap[param2]);
  return statusmap[param1] - statusmap[param2];
};

export const checkIfContain = (
  array: Array<{ text: string; value: string; key: string }>,
  conditional: string
): boolean => {
  return array.some(({ key }) => key.toLowerCase() === conditional);
};

export const getUserzOperations = (
  poll: any,
  // isCVSalesAdmin: boolean,
  isBusinessTeam: boolean,
): Array<string> => {
  const { hidden, isDefault, status } = poll;
  const hideIf = hidden === 'Y' ? 'Unhide' : 'Hide';
  const canSetDefault = isBusinessTeam && (isDefault === 'N') ? 'SetDefault' : '';
  switch (status) {
    case 'A':
      return [canSetDefault,'Edit', hideIf, 'Close', 'EmailContent', 'ShowResult', 'View', 'DirectLink', 'Publish to Page', 'Reports'];
    case 'I':
      return [canSetDefault, hideIf, 'ShowResult', 'DirectLink', 'Publish to Page', 'Reports'];
    case 'S':
      return ['Edit', 'Publish', 'Close'];
    default:
    break;  
  }
  return [];
};
