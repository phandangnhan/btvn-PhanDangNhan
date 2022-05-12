// chương trình tìm số nguyên tố

// nhập số cần nhập
let n = prompt("Enter a positive number: ");
let isPrime = true;

// check if number is equal to 1
if(n<2){
    isPrime = false;
}
else if(n>=2){
    for( var i=2;i<n-1;i++){
        if(n%i){
            isPrime=false;
            break;
        }
    }
}

if (isPrime == true){
    console.log(n + " là số nguyên tố <br/>");
}
else{
    console.log(n + " không phải là số nguyên tố <br/>");
}