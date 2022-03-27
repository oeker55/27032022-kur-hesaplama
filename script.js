let dolarkuru = 14.83;
let euroKuru = 16.29;
let sterlinKuru = 19.50;
let riyalKuru = 3.94;



function kurHesapla(tlDegeri) {
 tlDegeri = document.getElementById("tl").value;
 document.getElementById("dolar").innerHTML = tlDegeri/dolarkuru;
 document.getElementById("euro").innerHTML = tlDegeri/euroKuru;
 document.getElementById("sterlin").innerHTML = tlDegeri/sterlinKuru;
 document.getElementById("riyal").innerHTML = tlDegeri/riyalKuru;
 


}