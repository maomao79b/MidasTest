function getClockAngle(hh_mm) {
    var splitTime = hh_mm.split(":", 2);
    var hr = Number(splitTime[0]);
    var mm = Number(splitTime[1]);
    // Validators
    if (hr > 23 || hr < 0 || mm > 59 || mm < 0) {
        console.log("format time is: 00:00 - 23:59");
        return;
    }
    var cal = Math.abs((30 * hr) - (5.5 * mm));
    if (cal > 180) {
        cal = 360 - cal;
    }
    // console.log("hr: "+hr+" mm: "+mm)
    return cal;
}
// console.log(getClockAngle("09:00"));
// console.log(getClockAngle("17:30"));
// console.log(getClockAngle("08:22"));
console.log(getClockAngle("01:80"));
//# sourceMappingURL=Q1_ClockAngle.js.map