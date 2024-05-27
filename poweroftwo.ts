// Write a program that takes an integer as input and returns true if the input is a power of two.
function isPowerOfTwo(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

// Example usage:
let inputNumber: number = 16; 
console.log(isPowerOfTwo(inputNumber));
