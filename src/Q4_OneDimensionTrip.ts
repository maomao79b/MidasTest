interface ParameterCalEnergy {
    busNumberNearCurrent: number;
    busNumberNearShop: number;
    energy: number;
    shop: number;
    current: number;
}

function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
    let energy: number = 0;
    let current = start;
    let param: ParameterCalEnergy;
    for (let i = 0; i < shops.length; i++) {
        let busNumberNearCurrent = nearBus(current, stations);
        let busNumberNearShop = nearBus(shops[i], stations);
        // console.log('w1 -> ',current);
        // console.log('e2 -> ',energy);
        param = {
            busNumberNearCurrent: busNumberNearCurrent,
            busNumberNearShop: busNumberNearShop,
            energy: energy,
            shop: shops[i],
            current: current
        }
        calEnergy(param);
        busNumberNearCurrent = param.busNumberNearCurrent
        busNumberNearShop = param.busNumberNearShop
        energy = param.energy;
        current = param.current;
        // console.log('w3 -> ',current);
        // console.log('e4 -> ',energy);

        if (i + 1 == shops.length) {
            busNumberNearCurrent = nearBus(current, stations);
            let busNumberNearTarget = nearBus(target, stations);
            param = {
                busNumberNearCurrent: busNumberNearCurrent,
                busNumberNearShop: busNumberNearTarget,
                energy: energy,
                shop: target,
                current: current
            }
            calEnergy(param);
            busNumberNearCurrent = param.busNumberNearCurrent
            busNumberNearShop = param.busNumberNearShop
            energy = param.energy;
            current = param.current;
            // console.log('w5 -> ',current);
            // console.log('e6 -> ',energy);
        }
    }
    return energy;
}

function calEnergy(param: ParameterCalEnergy) {
    if (param.busNumberNearCurrent == param.busNumberNearShop) {
        param.energy += Math.abs(param.shop - param.current);
        param.current = param.shop;
        // console.log('w7 -> ',param.current);
        // console.log('e8 -> ',param.energy);
    } else {
        param.energy += Math.abs(param.busNumberNearCurrent - param.current);
        param.current = param.busNumberNearCurrent;
        // console.log('w9 -> ',param.current);
        // console.log('e10 -> ',param.energy);
        if (Math.abs(param.busNumberNearCurrent - param.shop) < Math.abs(param.busNumberNearShop - param.shop)) {
            param.energy += Math.abs(param.shop - param.current);
            param.current = param.shop;
            // console.log('w11 -> ',param.current);
            // console.log('e12 -> ',param.energy);
        } else {
            param.current = param.busNumberNearShop;
            param.energy += Math.abs(param.shop - param.current);
            param.current = param.shop;
            // console.log('w13 -> ',param.current);
            // console.log('e14 -> ',param.energy);
        }
    }
}

function nearBus(num: number, stations: number[]): number {
    let distant = 0;
    let busNumber;
    stations.forEach((item, i) => {
        let result = Math.abs(item - num);
        if (i == 0) {
            distant = result;
            busNumber = item;
        } else {
            if (result < distant) {
                distant = result;
                busNumber = item;
            }
        }
    })
    return busNumber;
}

// 0(START) – 1 – 2 – 3(BUS) – 4(SHOP) – 5 – 6(BUS) – 7 – 8(BUS) – 9(SHOP) – 10 – 11(TARGET)
console.log(minEnergy(0, [4, 9], [3, 6, 8], 11));

// 0(START) – 1 – 2(BUS) – 3 – 4(BUS) – 5(SHOP) – 6(TARGET)
console.log(minEnergy(0, [5], [2, 4], 6));

// 0(START) – 1 – 2(BUS) – 3 – 4(SHOP) – 5(BUS) – 6(TARGET)
console.log(minEnergy(0, [4], [2, 5], 6));

// 0(START) – 1 – 2(BUS) – 3 – 4(SHOP) – 5(BUS) – 6 - 7(BUS) - 8(BUS) - 9 - 10(SHOP) - 11 - 12 - 13 - 14(BUS) - 15(SHOP) - 16(BUS) - 17 - 18 - 19(BUS) - 20(TARGET)
console.log(minEnergy(0, [4, 10, 15], [2, 5, 7, 8, 14, 16, 19], 20));
