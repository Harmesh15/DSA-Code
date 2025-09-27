function zero(arr,n){
     var temp;
 for(let i=0; i<=n-1; i++){
    
    if(arr[i] == 0){

for(let j =i+1; j<= n-1; j++){
    if(arr[j] != 0){
       temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
     }
   }  
 }
}

return arr;
}
        //   [10,5,9,0,0,0,8,0]
var arr = [10,5,0,8,0,9];
const n = arr.length;
 const res = zero(arr,n);
console.log(res);
