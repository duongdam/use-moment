import moment from "moment";
declare type DateMomentString = Date | string | moment.Moment | moment.MomentInput;
declare const mmFormat: (aTime: DateMomentString, format?: string) => string;
declare const mmFormatUTC: (aTime: DateMomentString, format?: string) => string;
declare const mmFormatDDD: (aTime: DateMomentString) => string;
declare const mmFormatDDDD: (aTime: DateMomentString) => string;
declare const mmFormatMMDD: (aTime: DateMomentString) => string;
declare const mmFormatDDMM: (aTime: DateMomentString) => string;
declare const mmFormatYYYYMMDD: (aTime: DateMomentString) => string;
declare const mmFormatYYYY: (aTime: DateMomentString) => string;
declare const mmFormatYYYYMMDDHHMMSSZ: (aTime: DateMomentString) => string;
declare const mmExp: (aTime: DateMomentString) => moment.Moment;
export { mmExp, mmFormat, mmFormatUTC, mmFormatDDD, mmFormatMMDD, mmFormatYYYYMMDD, mmFormatDDDD, mmFormatDDMM, mmFormatYYYY, mmFormatYYYYMMDDHHMMSSZ, };
