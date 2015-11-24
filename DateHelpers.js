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
