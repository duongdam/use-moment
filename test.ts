import {mmIsAfter, mmIsSame, mmIsSameDate} from "./utils/mmChecks"
import {mmCalculatorsAdd, mmToDate} from "./utils/mmCalculators";
import {mmFormat} from "./utils/mmFormats";

// const {mmIsSame} = mmChecks

let _now = new Date()
let _now2 = new Date()

console.log(mmFormat(_now))
//2022-06-25
console.log(mmIsSame(_now, _now2))
//true
console.log(mmIsAfter(_now, _now2))
//false
console.log(mmIsSameDate(_now, _now2))
//true
console.log(mmToDate(_now))
//2022-06-25T08:38:46.155Z
console.log(mmToDate(mmCalculatorsAdd(_now, 1, 'days')))
//2022-06-26T08:38:46.000Z
