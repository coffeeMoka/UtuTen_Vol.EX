function populateDays(year, month) {
    const odd = [1, 3, 5, 7, 8, 10, 12];
    const even = [4, 6, 9, 11];
    if(odd.includes(month))
        return 31;
    else if(even.includes(month))
        return 30;
    else {
        if(leap(year))
            return 29;
        else
            return 28;
    }
}