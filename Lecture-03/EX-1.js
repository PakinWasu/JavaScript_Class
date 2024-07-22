let val1 =['Apple',1,false]
let val2 = ['Fries',2,true]
let val3 = ['Mars',true,'Apple'];
let arr = val1.concat(val2,val3);
let inde =[]
arr.forEach((item,index)=>{
    arr.forEach((itemm,indexx)=>{
        if(item === itemm & index !== indexx){
            inde.push(arr[index])
        }
    })

    // console.log(item,index)
})
inde = [...new Set(inde)]
console.log(inde)

