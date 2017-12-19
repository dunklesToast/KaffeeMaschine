const wpi = require('wiring-pi');
wpi.pinMode(20, OUTPUT);
wpi.pinMode(21, OUTPUT);

function coffeeSmall() {
    return new Promise((resolve, reject) => {
        wpi.digitalWrite(20, wpi.LOW);
        setTimeout(function () {
            wpi.digitalWrite(20, wpi.HIGH);
            setTimeout(function () {
                wpi.digitalWrite(20, wpi.LOW);
                resolve();
            }, 500);
        }, 500);
    });
}


//Big Coffee
function coffeeBig() {
    return new Promise((resolve, reject) => {
        wpi.digitalWrite(21, wpi.LOW);
        setTimeout(function () {
            wpi.digitalWrite(21, wpi.HIGH);
            setTimeout(function () {
                wpi.digitalWrite(21, wpi.LOW);
                resolve();
            }, 500);
        }, 500);
    });
}

module.exports = {
    small: coffeeSmall(),
    big: coffeeBig()
}