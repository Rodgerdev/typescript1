// Write a program that accepts a string as input, capitalizes the first letter of each word in the string, 
// and then returns the result string.
function capitalizeFirstLetterOfEachWord(input: string): string {
    return input.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Example usage
const inputString = "sample string and my name is rodgers";
const resultString = capitalizeFirstLetterOfEachWord(inputString);
console.log(resultString);  
