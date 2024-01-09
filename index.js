// How Node.js work

console.log('Starting log');

setTimeout(() => {
    console.log('2 second log');
}, 2000);

setTimeout(() => {
    console.log('0 second log');
}, 0);

console.log('completed log');
