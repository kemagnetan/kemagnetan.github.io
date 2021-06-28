
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.latihan').hide();
    $('.tambahan').hide();
    $('.soal').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.latihan').show(100);
    $('.tambahan').show(100);
    $('.soal').show(100);
    $('.sebelum').hide(100);
  }
  
});

//Latihan 
//Latihan
function cek1(){
  
  if(document.getElementById("s1benar").checked) {
       j1benar.style.display="";
       j1salah.style.display="none";
       pertanyaan2.style.display="";
   }   
   if(document.getElementById("s1salah").checked){
       j1salah.style.display="";
       j1benar.style.display="none";
   }
 }
 
 function cek2(){
   if(document.getElementById("s2benar").checked) {
        j2benar.style.display="";
        j2salah.style.display="none";
        pertanyaan3.style.display="";
    }   
    if(document.getElementById("s2salah").checked){
        j2salah.style.display="";
        j2benar.style.display="none";
    }
  }
 
  function cek3(){
   if(document.getElementById("s3benar").checked) {
        j3benar.style.display="";
        j3salah.style.display="none";
        kesimpulan.style.display="";
    }   
    if(document.getElementById("s3salah").checked){
        j3salah.style.display="";
        j3benar.style.display="none";
    }
  }