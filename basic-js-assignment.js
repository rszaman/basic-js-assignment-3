// - -----follow below my github repo link ----- -
// https://github.com/rszaman/basic-js-assignment-3


// Project-01- ------------kilometerToMeter------------------

function kilometerToMeter(kilometer){
    if (kilometer < 0) {
      return "You Can not convert a negetive value";
    } else {
      var meter = kilometer * 1000;
      return meter;
    }
}




// Project-02- ------------budgetCalculator------------------

function budgetCalculator(watch, mobile, laptop){
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    if (typeof watch != "number" || typeof mobile != "number" || typeof laptop != "number") {
        console.log("you must enter three parameter, and they shuld be number");
    } else if (watch < 0 || mobile < 0 || laptop < 0) {
        console.log("every input must be positive");
    } else {
        return (watch*watchPrice) + (mobile*mobilePrice) + (laptop*laptopPrice);
    }
}




// Project-03- -----------------hotelCost---------------------

function hotelCost(day) {
    
    var totalCost = 0;

    if (day < 0 ) {
        return "Negative Point";
    } else if (day == null) {
        return "Blank Input";
    } else if (isNaN(day)) {
        return "False Input";
    }

    else { 
        if(day <= 10) {                 
            totalCost = (day*100);
            return totalCost;
        } 
        else if (day <= 20) {          
            var firstTenDays = (10*100);
            var remainDays = (day-10)*80;
            totalCost = firstTenDays+remainDays;
            return totalCost;
        }
        else {                          
            var firstTenDays = (10*100);
            var secondTenDays = (10*80);
            var remainDays = (day-20)*50;
            totalCost = firstTenDays+secondTenDays+remainDays;
            return totalCost;
        } 
    }

}




// Project-04- ----------------megaFriend--------------------

function megaFriend(friends){
    var largestName="";

    if (friends == null) {
        return "Blank Input";
    } 
    else if (Array.isArray(friends) == false) {
        return "Its not Array";
    }
    else if (typeof(friends) == 'number') {
        return "Number Cannot be Define";
    }
    else {
        for (var i = 0; i < friends.length; i++) {
        
            const element = friends[i];
           
            if (element.length > largestName.length) {
                largestName = element;
            }
        }
        return largestName;
    }
    
}

