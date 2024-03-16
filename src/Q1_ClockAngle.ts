function getClockAngle(hh_mm: string): number {
    const splitTime = hh_mm.split(":", 2);
    let hr: number = Number(splitTime[0]);
    const mm: number = Number(splitTime[1]);

    // Validators
    if (hr > 23 || hr < 0 || mm > 59 || mm < 0) {
        throw new Error(`${hh_mm} is not correct \nformat time is: 00:00 - 23:59`);
    }

    hr = hr > 12 ? hr - 12 : hr;

    // Calculate
    let cal = Math.abs((30 * hr) - (5.5 * mm));
    if (cal > 180) {
        cal = 360 - cal
    }
    return cal;
}

try {

    console.log("09:00",getClockAngle("09:00"));
    console.log("17:30",getClockAngle("17:30"));
    // console.log("16:45",getClockAngle("16:45"));
    // console.log("08:22",getClockAngle("08:22"));
    // console.log("23:21",getClockAngle("23:21"));
    // console.log("11:8",getClockAngle("11:8"));
    // console.log("01:80",getClockAngle("01:80"));
} catch (error) {
    console.log(error.message);
}
