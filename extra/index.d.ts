import moment from "moment";
declare type DateMomentString =
  | Date
  | string
  | moment.Moment
  | moment.MomentInput;
declare const mmStartOfDay: (aTime: DateMomentString) => moment.Moment;
declare const mmStartOfWeeks: (aTime: DateMomentString) => moment.Moment;
declare const mmStartOfIsoWeeks: (aTime: DateMomentString) => moment.Moment;
declare const mmStartOfMonth: (aTime: DateMomentString) => moment.Moment;
declare const mmStartOfMonths: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfDay: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfWeek: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfWeeks: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfIsoWeeks: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfMonth: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfMonths: (aTime: DateMomentString) => moment.Moment;
declare const mmIsoWeekDay: (
  aTime: DateMomentString,
  week: number,
  day: number
) => moment.Moment;
declare const mmIsoWeeksDays: (
  aTime: DateMomentString,
  weeks: number,
  days: number
) => moment.Moment;
declare const mmWeekDay: (
  aTime: DateMomentString,
  week: number,
  day: number
) => moment.Moment;
declare const mmWeekDays: (
  aTime: DateMomentString,
  weeks: number,
  days: number
) => moment.Moment;
declare const mmWeeksDay: (
  aTime: DateMomentString,
  week: number,
  day: number
) => moment.Moment;
declare const mmWeeksDays: (
  aTime: DateMomentString,
  weeks: number,
  days: number
) => moment.Moment;
declare const mmWeek: (
  aTime: DateMomentString,
  week?: number
) => number | moment.Moment;
declare const mmWeeks: (
  aTime: DateMomentString,
  week?: number
) => number | moment.Moment;
declare const mmMonth: (
  aTime: DateMomentString,
  month?: number | string
) => number | moment.Moment;
declare const mmMonths: (
  aTime: DateMomentString,
  month?: number | string
) => number | moment.Moment;
declare const mmDate: (
  aTime: DateMomentString,
  date?: number
) => number | moment.Moment;
declare const mmDates: (
  aTime: DateMomentString,
  date?: number
) => number | moment.Moment;
declare const mmWeekday: (
  aTime: DateMomentString,
  day?: number
) => number | moment.Moment;
declare const mmIsoWeekday: (
  aTime: DateMomentString,
  day?: number
) => number | moment.Moment;
export {
  mmStartOfDay,
  mmStartOfWeeks,
  mmStartOfIsoWeeks,
  mmStartOfMonth,
  mmStartOfMonths,
  mmEndOfDay,
  mmEndOfWeek,
  mmEndOfWeeks,
  mmEndOfIsoWeeks,
  mmEndOfMonth,
  mmEndOfMonths,
  mmIsoWeekDay,
  mmIsoWeeksDays,
  mmWeek,
  mmWeeks,
  mmWeekDay,
  mmWeekDays,
  mmWeeksDay,
  mmWeeksDays,
  mmDate,
  mmDates,
  mmMonth,
  mmMonths,
  mmIsoWeekday,
  mmWeekday,
};
