/// <reference path="typings/Arrays.d.ts"/>
var Polyfills;
(function (Polyfills) {
    if (!Array.prototype.find) {
        Array.prototype.find = function (predicate) {
            if (this === null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;
            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }
})(Polyfills || (Polyfills = {}));
var DateHelper;
(function (DateHelper) {
    function getDateFromWeekNumber(week, year) {
        var simple = new Date(year, 0, 1 + (week - 1) * 7);
        var dow = simple.getDay();
        var ISOweekStart = simple;
        if (dow <= 4)
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        return ISOweekStart;
    }
    DateHelper.getDateFromWeekNumber = getDateFromWeekNumber;
})(DateHelper || (DateHelper = {}));
/// <reference path="Dates.ts"/>
/// <reference path="Arrays.ts"/> 
