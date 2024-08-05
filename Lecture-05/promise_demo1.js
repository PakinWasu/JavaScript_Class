function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

promiseTimeout(2000)
    
    

    promiseTimeout(2000)
    .then(() => {
        console.log("Done!!");
        return promiseTimeout(3000);
        
    })
    .then(() => {
        console.log("Also done!!");
        return Promise.resolve(42);
    })
    .then((result) =>{
        console.log(result);
    })
    .catch(() =>{
        console.log("Error");
    });
    