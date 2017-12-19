/**
 * by: tom
 * created on: 12/18/17
 */

function small() {
    makeCoffee('small', function (code) {
        if(code === 200) alert('Dein großer Kaffee wird zubereitet!');
        else alert('KABUMM! Es gab einen Fehler')
    });
}

function big() {
    makeCoffee('big', function (code) {
        if(code === 200) alert('Dein großer Kaffee wird zubereitet!');
        else alert('KABUMM! Es gab einen Fehler')
    });
}

function makeCoffee(type, cb) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', '/make/' + type, false);
    xmlHttp.send(null);
    cb(xmlHttp.responseText);
}