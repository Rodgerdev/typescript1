// Write a program that takes an integer as input and returns an integer with reversed digit ordering.
function reverseInteger(num: number): number {
   
    let numStr = num.toString();

    
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        numStr = numStr.slice(1); 
    }

    
    let reversedStr = numStr.split('').reverse().join('');

    let reversedNum = parseInt(reversedStr);

    // Restore the negative sign if necessary
    if (isNegative) {
        reversedNum = -reversedNum;
    }

    return reversedNum;
}

//Examples of instances
console.log(reverseInteger(500)); 
console.log(reverseInteger(-56)); 
console.log(reverseInteger(-90)); 
console.log(reverseInteger(91));  
