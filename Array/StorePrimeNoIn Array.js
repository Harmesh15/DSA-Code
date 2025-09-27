function Prime(n){

    var arr = [];
    var i = 2;
    var count = 0;
    let isprime =true;

    while(count<=n)
    {

        if( i%2 ==0 ){
            isprime = false;
             i++;
            break;   
           
        }

        else if (isprime) {
             arr.push(i);
             count++;
        } 

        i++; 

    }
    console.log(arr);
}

Prime(10);