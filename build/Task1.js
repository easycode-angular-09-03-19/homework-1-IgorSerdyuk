function fact(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(`Task 1 / fact(n)`);
console.log(`fact(1) = ${fact(1)}`);
console.log(`fact(2) = ${fact(2)}`);
console.log(`fact(3) = ${fact(3)}`);
console.log(`fact(4) = ${fact(4)}`);
console.log(`fact(5) = ${fact(5)}`);
console.log('\n');
