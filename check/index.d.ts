import moment, { unitOfTime } from "moment";
declare type DateMomentString =
  | Date
  | string
  | moment.Moment
  | moment.MomentInput;
declare const mmIsSame: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  granularity?: unitOfTime.StartOf
) => boolean;
declare const mmIsBetween: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  cTime: DateMomentString,
  granularity?: unitOfTime.StartOf,
  inclusivity?: "()" | "[)" | "(]" | "[]"
) => boolean;
declare const mmIsBefore: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  granularity?: unitOfTime.StartOf
) => boolean;
declare const mmIsSameOrBefore: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  granularity?: unitOfTime.StartOf
) => boolean;
declare const mmIsAfter: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  granularity?: unitOfTime.StartOf
) => boolean;
declare const mmIsSameOrAfter: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  granularity?: unitOfTime.StartOf
) => boolean;
declare const mmIsSameDate: (
  aTime: DateMomentString,
  bTime: DateMomentString,
  granularity?: unitOfTime.StartOf
) => boolean;
export {
  mmIsSame,
  mmIsAfter,
  mmIsBefore,
  mmIsSameOrAfter,
  mmIsSameOrBefore,
  mmIsSameDate,
  mmIsBetween,
};
