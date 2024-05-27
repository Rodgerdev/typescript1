// Write a program that counts the number of vowels in a sentence.
function countVowels(sentence: string): number {
   
    sentence = sentence.toLowerCase();
    
    let vowelCount = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(sentence[i])) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

// Example usage:
const sentence = "I am Rodgers Ndemo, a Developer";
const numberOfVowels = countVowels(sentence);
console.log(`The number of vowels in the sentence is: ${numberOfVowels}`);
