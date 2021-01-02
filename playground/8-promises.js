const doWordPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 4, 7]);
        reject('Error it is');
    }, 2000)
});

doWordPromise.then((result) => {
    console.log('Success', result);
}).catch((error) => {
    console.log('Error', error)
})

// 
//                            fulfilled
//                          /
// Promise   -- pending -->
//                          \
//                            rejected
// 