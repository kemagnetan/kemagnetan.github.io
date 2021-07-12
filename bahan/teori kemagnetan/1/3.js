

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
function coba1() { 
    vid.currentTime=18;
    vid.play();
  } 
  function coba2() { 
    vid.currentTime=141;
    vid.play();
  } 
  function coba3() { 
    vid.currentTime=342;
    vid.play();
  } 
  
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.kesimpulansebelum').hide();
    $('.latihanhide').hide();
    $('.pertanyaansingkat').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.kesimpulansebelum').show(100);
    $('.sebelum').hide(100);
    $('.latihanhide').show();
    $('.pertanyaansingkat').show();


  }
  
});

//Latihan 
function cekhasil1(){
  
  if(document.getElementById("benarsoal1").checked) {
    class2.style.display="none";
    benar1.style.display="";
   }   else{
    class1.style.display="none";
    salah1.style.display="";
   }

 }

 function cekhasil2(){
  
  if(document.getElementById("benarsoal2").checked) {
    class4.style.display="none";
    benar2.style.display="";
   }   else{
    class3.style.display="none";
    salah2.style.display="";
   }

 }

 function cekhasil3(){
  
  if(document.getElementById("benarsoal3").checked) {
    class6.style.display="none";
    benar3.style.display="";
   }   else{
    class5.style.display="none";
    salah3.style.display="";
   }

 }
//Latihan
function cek1(){
  
 if(document.getElementById("s1benar").checked) {
      j1benar.style.display="";
      j1salah.style.display="none";
      pertanyaan2.style.display="";
      $("#1jawabanbenar").show(100);
      $("#1jawabansalah").hide(100);
  }   
  if(document.getElementById("s1salah").checked){
      j1salah.style.display="";
      j1benar.style.display="none";
      $("#1jawabanbenar").hide(100);
      $("#1jawabansalah").show(100);
  }
}

function cek2(){
  if(document.getElementById("s2benar").checked) {
       j2benar.style.display="";
       j2salah.style.display="none";
       pertanyaan3.style.display="";
       $("#2jawabanbenar").show(100);
       $("#2jawabansalah").hide(100);
   }   
   if(document.getElementById("s2salah").checked){
       j2salah.style.display="";
       j2benar.style.display="none";
       $("#2jawabanbenar").hide(100);
       $("#2jawabansalah").show(100);
   }
 }

 function cek3(){
  if(document.getElementById("s3benar").checked) {
       j3benar.style.display="";
       j3salah.style.display="none";
       kesimpulan.style.display="";
       hidekesimpulan.style.display="none";
        $("#3jawabanbenar").show(100);
       $("#3jawabansalah").hide(100);
   }   
   if(document.getElementById("s3salah").checked){
       j3salah.style.display="";
       j3benar.style.display="none";
       $("#3jawabanbenar").hide(100);
       $("#3jawabansalah").show(100);
   }
 }