
/// left rotate by one


function leftrotate(arr){
    
    let temp = arr[0];
    
    for(let i=1; i<=arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = temp;
    return arr;
}

const arr = [1,2,3,4,5];

const res = leftrotate(arr)
console.log(res);


   //  sec method of left rotate by one



   function rotatebyone(arr,n){
    
    let temp = arr[0];
    
    for(let i=1; i<=n-1; i++){
        arr[i-1] = arr[i];
    }
    arr[n-1] = temp;
   return arr;
}

var arr = [1,2,3,4,5];
let n = arr.length;
const res = rotatebyone(arr,n)
console.log(res)