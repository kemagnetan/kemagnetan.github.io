

//navigasi gambar

function gbr1(){
    induksi.style.display="";
    menggosok.style.display="none";
    elektro.style.display="none";


    tombol1.style.background="black";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";


}
function gbr2(){
  induksi.style.display="none";
  menggosok.style.display="";
  elektro.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="black";
    tombol3.style.background="#04709b"; 

}
function gbr3(){
  induksi.style.display="none";
  menggosok.style.display="none";
  elektro.style.display="";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="black";


}

//mengarahkan menit tertentu dengan button
//mengarahkan menit tertentu dengan button
var vid = document.getElementById("vidio");
function alat() { 
  vid.currentTime=8;
  vid.play();
} 
function coba1() { 
    vid.currentTime=36;
    vid.play();
  } 
  function coba2() { 
    vid.currentTime=180;
    vid.play();
  } 
  function coba3() { 
    vid.currentTime=273;
    vid.play();
  } 
  
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.kesimpulan').hide();
    $('.latihanhide').hide();
    $('.pertanyaansingkat').hide();
    $('.hide').hide();


  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.latihanhide').show();
    $('.pertanyaansingkat').show();
    $('.hide').show();
  }
  
});

//Latihan 
//Latihan 
function cekhasil1(){
  
  if(document.getElementById("benarsoal1").checked) {
    hasiljawaban1.style.display="";
    bgpil1.style.background="green";
    bgpil1.style.color="white";
   }   else{
    hasiljawaban1.style.display="";
    bgpil1.style.background="red";
   }

 }

 function cekhasil2(){
  
  if(document.getElementById("benarsoal2").checked) {
    hasiljawaban2.style.display="";
    bgpil2.style.background="green";
    bgpil2.style.color="white";
    kesimpulann.style.display="";
    sebelum22.style.display="none";
   }   else{
    hasiljawaban2.style.display="";
    bgpil2.style.background="red";
   }

 }

 