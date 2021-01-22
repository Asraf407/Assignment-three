//1# kilometerToMeter
    function kilometerToMeter(kilometer){
        var meter =kilometer*1000;
        return meter;
    }
    var result= Math.abs(kilometerToMeter(15));
    console.log(result);

// 2# budgetCalculator (per watch price 50, per phone price 100tk,  per laptop price 500tk)
function budgetCalculator(watch,phone,laptop){
    var costOfWatch=50*watch;
    var costOfPhone=100*phone;
    var costOfLaptop=500*laptop;
    totalCost=costOfWatch + costOfPhone + costOfLaptop;
    return totalCost;
}
var result =Math.abs( budgetCalculator(5,3,2));
console.log(result);


// 3# hotelCost( less than 10 days = 100 tk per day ,
//  more than 10 but less than 20 = 80 tk per day after 10 days,
//  more than 20 days = tk 50 per day)

function hotelCost(daysToStay){
    var cost =0;
    if(daysToStay<=10){
        cost=daysToStay*100;

    }else if(daysToStay<=20){
        var firstDiscountRate=10*100;
        var remainingDays = daysToStay -10;
        var secondDiscountRate =  remainingDays*80
        var cost= firstDiscountRate + secondDiscountRate;


    }else{
        var firstDiscountRate=10*100;
        var secondDiscountRate=10*80;
        var remainingDays = daysToStay -20;
        var thirdDiscountRate = remainingDays*50;
        var cost= firstDiscountRate + secondDiscountRate + thirdDiscountRate;
    }
    return cost;
}
var calcutation =hotelCost(23);
console.log(calcutation);


// 4# megaFriend =[] longest string word should be  return of the function

function megaFriend(friendList) {
    var longestStr = friendList[0];
    for (var i = 1; i < friendList.length; i++) {
        if (friendList[i].length > longestStr.length) {
            longestStr = friendList[i];
        }
    }
    return longestStr;
}

var friendList = ["jahanara", "Rihan","Sadia","Soniya", "Mohammed Asraf Uddin", "Ritha","Romaisa", "Arif"];

console.log(megaFriend(friendList));