
  let pheptinh = prompt(' Nhập phép tính:');
  let  a = prompt(' Nhập số cần tính:');
  let  b = prompt(' Nhập số cần tính:');
let result ;


if(pheptinh=="+"){
    result=Number(a) + Number(b);
    console.log("Tổng hai số " + a + " và " + b + " là " + result);
}
  
else if(pheptinh=="-"){
    result=Number(a) - Number(b);
    console.log("Hiệu hai số " + a + " và " + b + " là " +  result);
}
else if(pheptinh=="*"){
    result=Number(a) * Number(b);
  console.log("Tích hai số " + a + " và " + b + " là " + result );
}
else if(pheptinh=="/"){
    result=Number(a) / Number(b);
    console.log("Thương hai số " + a + " và " + b + " là " + result  );
}
else if(pheptinh=="%"){
    result=Number(a) % Number(b);
    console.log("Phần dư khi chia hai số " + a + " và " + b + " là " + result );
}