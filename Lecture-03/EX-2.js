let furniture = ['Table','Chairs','Couch'];

for(let arr of furniture){
    // console.log(arr);
    for(let i of arr){
        // process.stdout.write(i)
        console.log(i)
    }
    if(arr != furniture[furniture.length-1]){
        console.log("");    
    }
    
    // process.stdout.write(' ')
}