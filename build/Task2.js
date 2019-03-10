function multiply(...numbers) {
    var result = 1;
    numbers.forEach(x => {
        result *= x;
    });
    return result;
}
console.log('Task2 / multiply(1,2,..,n) where 1,2,n number');
console.log(`multiply(2,3,6); Result = ${multiply(2, 3, 6)}; Expected result = 36`);
console.log(`multiply(-7,58,4); Result = ${multiply(-7, 58, 4)}; Expected result = -1624`);
console.log(`multiply(15,14,13,0); Result = ${multiply(15, 14, 13, 0)}; Expected result = 0`);
console.log(`multiply(1,2,3,4,5,6); Result = ${multiply(1, 2, 3, 4, 5, 6)}; Expected result = 720`);
console.log(`multiply(2,3,4,5,6,7) === fact(7); Result = ${multiply(2, 3, 4, 5, 6, 7) === fact(7)}; Expected result = true`);
console.log('');
