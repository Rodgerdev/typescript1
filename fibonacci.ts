// Write a program to generate the Fibonacci sequence up to 100.
let n1 = 0 ; let n2 = 1 ; let n3:number
console.log(n1+" "+n2)
for(let i=2; i<100; i++){
n3=n1+n2
if (n3>100) {
    break;
}
console.log(n3+" ")
n1=n2
n2=n3
}