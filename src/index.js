// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var obj= {};

    if (currency <= 0) { 
        return obj;
    }
    if (currency > 10000) {
        obj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return obj;
    }
    if(currency / 50 >= 1){
        obj['H'] = Math.floor(currency/50);
        currency = currency - 50 * obj['H'];
    }
    if (currency / 25 >= 1) {
        obj['Q'] = Math.floor(currency/25);
        currency = currency- 25 * obj['Q'];
    }
    if (currency / 10 >= 1) {
        obj['D'] = Math.floor(currency/10);
        currency = currency-10 * obj['D'];
    }
    if (currency / 5 >= 1) {
        obj['N'] = Math.floor(currency/5);
        currency = currency-5 * obj['N'];
    }
    if (currency / 1 >= 1) {
        obj['P'] = Math.floor(currency/1);
        currency = currency-obj['P'];
    }
   return obj;
}
