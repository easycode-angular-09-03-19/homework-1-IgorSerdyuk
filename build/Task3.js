function reverseString(value) {
    return value.split('').reverse().join('');
}
console.log('Task3 / reverseString(string)');
console.log(`reverseString(\'test\'); Result = ${reverseString('test')}; Expected result = tset`);
console.log(`reverseString(\'a\'); Result = ${reverseString('a')}; Expected result = a`);
console.log(`reverseString(\'\'); Result = ${reverseString('')}; Expected result = `);
console.log(`reverseString(\'inverted string\'); Result = ${reverseString('inverted string')}; Expected result = gnirts detrevni`);
console.log('');
