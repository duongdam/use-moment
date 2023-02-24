import moment from "moment";
declare type DateMomentString =
  | Date
  | string
  | moment.Moment
  | moment.MomentInput;
declare const mmToDate: (aTime: DateMomentString) => Date;
declare const mmAdd: (
  aTime: DateMomentString,
  amount: moment.DurationInputArg1,
  unit: moment.DurationInputArg2
) => moment.Moment;
declare const mmSubtract: (
  aTime: DateMomentString,
  amount: moment.DurationInputArg1,
  unit: moment.DurationInputArg2
) => moment.Moment;
declare const mmDiff: (
  aTime: DateMomentString,
  bTime: DateMomentString
) => number;
declare const mmSet: (
  aTime: DateMomentString,
  objectLiteral: moment.MomentSetObject
) => moment.Moment;
declare const mmDefault: (
  aTime: DateMomentString,
  valueOf?: boolean
) => number | moment.Moment;
declare const mmDefaultUTC: (
  aTime: DateMomentString,
  valueOf?: boolean
) => number | moment.Moment;
declare const mmDuration: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  divisor: number
) => number;
declare const mmDurationUTC: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  divisor: number
) => number;
export {
  mmToDate,
  mmSet,
  mmDiff,
  mmAdd,
  mmSubtract,
  mmDefault,
  mmDefaultUTC,
  mmDuration,
  mmDurationUTC,
};
