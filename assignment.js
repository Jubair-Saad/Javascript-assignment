// converting kilometer to meter.
function kilometerToMeter(kilometer){
    if (kilometer < 0)
    // Distance can't be a negative value.
        return undefined;
    else {
        var meter = kilometer*1000;
    }
    return meter;
}


// calculating the total cost.
function budgetCalculator(watch, phone, laptop){
    if (watch < 0 || phone < 0 || laptop < 0)
    // Number of item can't be a negative value.
        return undefined;
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost ;
}


// calculating the total hotel bill.
function hotelCost(daysStaying){
    if (daysStaying < 0)
    // Days can't be count in negative.
        return undefined;
    var totalBill = 0 ;
    if (daysStaying <= 10){
        totalBill = daysStaying * 100;
    }
    else if (daysStaying <= 20){
        var first10Days = 10 * 100;
        var remaining = daysStaying - 10;
        var second10Days = remaining * 80;
        totalBill = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = daysStaying - 20;
        var after20Days = remaining * 50;
        totalBill = first10Days + second10Days + after20Days;
    }
    return totalBill;
}


// finding the longest string of an array.
function megaFriend(arraystring) {
    if(arraystring == undefined || arraystring == null)
    // No longest name will be shown.
        return null;
    var longest = '';
    for (var i = 0; i < arraystring.length; i++) {
    if (arraystring[i].length > longest.length)
    longest = arraystring[i];
    }
    return longest;
    }
