// create a variable named nemo
// assign string nemo to a list
// create a function findnemo
// pass it an argument array
// iterate 
// if value in array is equal 'nemo'
// output foundnemo


// const nemo = ['nemo'];
// const everyone = [
//     'dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank',
// ];
// const large = new Array(100).fill('nemo');

// const {
//     performance
// } = require('perf_hooks');

// function findNemo(array) {
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++) {
//         if (array[0] === 'nemo') {
//             console.log('Found Nemo');
//         }
//     }
//     let t1 = performance.now();
//     console.log("Call to find Nemo took " + (t1 - t0) + ' milliseconds');
// }

// findNemo(everyone);


const number = 42;

try {
    number = 99;
} catch (err) {
    console.log(err)
}

console.log(number)