

//navigasi gambar

function gbr1(){
    generator.style.display="";
    dinamo.style.display="none";
    trafo.style.display="none";


    tombol1.style.background="black";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";

}
function gbr2(){
  generator.style.display="none";
  dinamo.style.display="";
  trafo.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="black";
    tombol3.style.background="#04709b"; 


}
function gbr3(){
  generator.style.display="none";
  dinamo.style.display="none";
  trafo.style.display="";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="black";


}



//cek hasil latihan
var s1b=document.getElementById("s1b");
var s1s=document.getElementById("s1s");

var s2b=document.getElementById("s2b");
var s2s=document.getElementById("s2s");

var s3b=document.getElementById("s3b");
var s3s=document.getElementById("s3s");

var s4b=document.getElementById("s4b");
var s4s=document.getElementById("s4s");

var s5b=document.getElementById("s5b");
var s5s=document.getElementById("s5s");


function cek(){
    if(document.getElementById("soal1").checked) {
        s1b.style.display="";
        s1s.style.display="none";
    }else {

        s1b.style.display="none";
        s1s.style.display="";
    }
    if(document.getElementById("soal2").checked) {
        s2b.style.display="";
        s2s.style.display="none";
    }else {

        s2b.style.display="none";
        s2s.style.display="";
    }
    if(document.getElementById("soal3").checked) {
        s3b.style.display="none";
        s3s.style.display="";
    }else {
        s3b.style.display="";
        s3s.style.display="none";
    }
    if(document.getElementById("soal4").checked) {
        s4b.style.display="";
        s4s.style.display="none";
    }else {

        s4b.style.display="none";
        s4s.style.display="";
    }
    if(document.getElementById("soal5").checked) {
        s5b.style.display="none";
        s5s.style.display="";
    }else {
        s5b.style.display="";
        s5s.style.display="none";
    }

    $("#jawabanbenar").show(200);

}