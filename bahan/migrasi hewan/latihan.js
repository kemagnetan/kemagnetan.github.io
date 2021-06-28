//Soal latihan 1
//Soal latihan 1
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");

function cek1(){

    
    if(document.getElementById("qsoal1").checked) {
        s1.style.display="";
    } else{
        s1.style.display="none";
    }
    if(document.getElementById("soal2").checked) {
        s2.style.display="";
    } else{
        s2.style.display="none";
    }
    if(document.getElementById("soal3").checked) {
        s3.style.display="";
    } else{
        s3.style.display="none";
    }
    if(document.getElementById("soal4").checked) {
        s4.style.display="";
    }  else{
        s4.style.display="none";
    }

}
//Soal latihan 2
//Soal latihan 2

var q2s1=document.getElementById("q2s1");
var q2s2=document.getElementById("q2s2");
var q2s3=document.getElementById("q2s3");
var q2s4=document.getElementById("q2s4");

function cek2(){

    
    if(document.getElementById("q2soal1").checked) {
  
        q2s1.style.display="";
    } else{
        q2s1.style.display="none";
    }
    if(document.getElementById("q2soal2").checked) {
        q2s2.style.display="";
    } else{
        q2s2.style.display="none";
    }
    if(document.getElementById("q2soal3").checked) {
        q2s3.style.display="";
    } else{
        q2s3.style.display="none";
    }
    if(document.getElementById("q2soal4").checked) {
        q2s4.style.display="";
    }  else{
        q2s4.style.display="none";
    }

}
//Soal latihan 3
//Soal latihan 3

var q3s1=document.getElementById("q3s1");
var q3s2=document.getElementById("q3s2");
var q3s3=document.getElementById("q3s3");
var q3s4=document.getElementById("q3s4");

function cek3(){

    
    if(document.getElementById("q3soal1").checked) {
  
        q3s1.style.display="";
    } else{
        q3s1.style.display="none";
    }
    if(document.getElementById("q3soal2").checked) {
        q3s2.style.display="";
    } else{
        q3s2.style.display="none";
    }
    if(document.getElementById("q3soal3").checked) {
        q3s3.style.display="";
    } else{
        q3s3.style.display="none";
    }
    if(document.getElementById("q3soal4").checked) {
        q3s4.style.display="";
    }  else{
        q3s4.style.display="none";
    }

}

//soal latihan 4
//soal latihan 4

var q4s1=document.getElementById("q4s1");
var q4s2=document.getElementById("q4s2");
var q4s3=document.getElementById("q4s3");
var q4s4=document.getElementById("q4s4");

function cek4(){

    
    if(document.getElementById("q4soal1").checked) {
  
        q4s1.style.display="";
    } else{
        q4s1.style.display="none";
    }
    if(document.getElementById("q4soal2").checked) {
        q4s2.style.display="";
    } else{
        q4s2.style.display="none";
    }
    if(document.getElementById("q4soal3").checked) {
        q4s3.style.display="";
    } else{
        q4s3.style.display="none";
    }
    if(document.getElementById("q4soal4").checked) {
        q4s4.style.display="";
    }  else{
        q4s4.style.display="none";
    }

}
//soal latihan 5
//soal latihan 5

var q5s1=document.getElementById("q5s1");
var q5s2=document.getElementById("q5s2");
var q5s3=document.getElementById("q5s3");
var q5s4=document.getElementById("q5s4");

function cek5(){

    
    if(document.getElementById("q5soal1").checked) {
  
        q5s1.style.display="";
    } else{
        q5s1.style.display="none";
    }
    if(document.getElementById("q5soal2").checked) {
        q5s2.style.display="";
    } else{
        q5s2.style.display="none";
    }
    if(document.getElementById("q5soal3").checked) {
        q5s3.style.display="";
    } else{
        q5s3.style.display="none";
    }
    if(document.getElementById("q5soal4").checked) {
        q5s4.style.display="";
    }  else{
        q5s4.style.display="none";
    }

}

//navigasi soal

function soal1_sow(){
    soal1sow.style.display="";
    soal2sow.style.display="none";
    soal3sow.style.display="none";
    soal4sow.style.display="none";
    soal5sow.style.display="none";

    tombol1.style.background="black";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";


}
function soal2_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="";
    soal3sow.style.display="none";
    soal4sow.style.display="none";
    soal5sow.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="black";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";
 

}
function soal3_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="none";
    soal3sow.style.display="";
    soal4sow.style.display="none";
    soal5sow.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="black";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";


}
function soal4_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="none";
    soal3sow.style.display="none";
    soal4sow.style.display="";
    soal5sow.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="black";
    tombol5.style.background="#04709b";


}
function soal5_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="none";
    soal3sow.style.display="none";
    soal4sow.style.display="none";
    soal5sow.style.display="";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="black";
}