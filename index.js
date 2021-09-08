// Hey kiddo

const ageCheck = function(age) {
    return age >= 18;                   // when age >= 18, return is true, otherwise return will be false
}

const adultCheck = function(age) {
    let adult = ageCheck(age);  // use ageCheck function with age and return value to adult > adult is now true or false
    if (adult == true) {
        return "Hello there"
    }
    return "Hey kiddo"
};

console.log(adultCheck(21));  // Hello there
console.log(adultCheck(15));  // Hey kiddo  

// VAT exercise1

// function expression:
// const VatAmount = function (percentageVAT) {  
//     return (percentageVAT / 100) + 1;
// }

// or arrow function (shorter): 
const VatAmount = percentageVAT => (percentageVAT / 100) + 1;


const priceWithVAT = function (basePrice, percentageVAT) {
    const multiplierVAT = VatAmount(percentageVAT);
    return basePrice * multiplierVAT;
};

console.log(priceWithVAT(1000, 21));  // 1210

// VAT exercise 2

const multiplierVAT2 = (percentageVAT2) => (percentageVAT2 / 100) + 1;


const calculateBasePriceAndVatAmount = (pricePlusVAT2, percentageVAT2) => {
    const multiplier = multiplierVAT2(percentageVAT2);
    const basePrice = pricePlusVAT2 / multiplier;
    const VatAmount = pricePlusVAT2 - basePrice;
    return [basePrice, VatAmount]; 
}

console.log(calculateBasePriceAndVatAmount(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVatAmount(1500, 50)); // [1000, 500]
console.log(calculateBasePriceAndVatAmount(1500, 10)); // [1363.63635, 136.36365]





