

//navigasi gambar

function gbr1(){
    batang.style.display="";
    jarum.style.display="none";
    ladam.style.display="none";
    lingkaran.style.display="none";
    silinder.style.display="none";

    tombol1.style.background="black";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";


}
function gbr2(){
    batang.style.display="none";
    jarum.style.display="";
    ladam.style.display="none";
    lingkaran.style.display="none";
    silinder.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="black";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";
 

}
function gbr3(){
    batang.style.display="none";
    jarum.style.display="none";
    ladam.style.display="";
    lingkaran.style.display="none";
    silinder.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="black";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";


}
function gbr4(){
    batang.style.display="none";
    jarum.style.display="none";
    ladam.style.display="none";
    lingkaran.style.display="";
    silinder.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="black";
    tombol5.style.background="#04709b";


}
function gbr5(){
    batang.style.display="none";
    jarum.style.display="none";
    ladam.style.display="none";
    lingkaran.style.display="none";
    silinder.style.display="";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="black";
}

//mengarahkan menit tertentu dengan button
//mengarahkan menit tertentu dengan button
var vid = document.getElementById("vidio");
function alat() { 
    vid.currentTime=28;
    vid.play();
  } 
  function coba1() { 
    vid.currentTime=41;
    vid.play();
  } 
  function coba2() { 
    vid.currentTime=65;
    vid.play();
  } 
  
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.kesimpulan').hide();
    $('.latihanhide').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.latihanhide').show(100);
  }
  
});

//Latihan 
//Latihan
function cek1(){
  
 if(document.getElementById("s1benar").checked) {
      j1benar.style.display="";
      j1salah.style.display="none";
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