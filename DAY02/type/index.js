//Boolean[불리언] 타입(true or false)
const isIce = true;
const hasItem = false;
const isAdult = true;
const is잼민 = false;

//
// truthy: falsy에 들어간거 빼고 전부 다 true
// falsy: 0, " "는 false열.

const a = Boolean(10); //true
const b = Boolean(-3); //true
const c = Boolean("틀딱"); //true
const d = Boolean("스타벅스"); //true
const e = Boolean(""); //false
const f = Boolean(0); //false
