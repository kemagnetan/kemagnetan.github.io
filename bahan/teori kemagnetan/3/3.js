

//mengarahkan menit tertentu dengan button
//mengarahkan menit tertentu dengan button
var vid = document.getElementById("vidio");

function alat() { 
  vid.currentTime=6;
  vid.play();
} 
function coba() { 
    vid.currentTime=41;
    vid.play();
  } 
  
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){

    $('.latihanhide').hide();
    $('.sebelum2').hide(100);

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.latihanhide').show();
    $('.sebelum2').show(100);
  }
  
});

//Latihan 
//Latihan
//Soal latihan 1
//Soal latihan 1
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");

function cek1(){

    
    if(document.getElementById("qsoal1").checked) {
        s1.style.display="";
        $("#jawabanbenar").hide(0);
        $("#jawabansalah").show(200);
    } else{
        s1.style.display="none";
    }
    if(document.getElementById("soal2").checked) {
        s2.style.display="";
        soal2sow.style.display="";
        $("#jawabanbenar").show(200);
        $("#jawabansalah").hide(0);
    } else{
        s2.style.display="none";
    }
    if(document.getElementById("soal3").checked) {
        s3.style.display="";
        $("#jawabanbenar").hide(0);
        $("#jawabansalah").show(200);
    } else{
        s3.style.display="none";
    }
    if(document.getElementById("soal4").checked) {
        s4.style.display="";
        $("#jawabanbenar").hide(0);
        $("#jawabansalah").show(200);
        
    }  else{
        s4.style.display="none";
    }

}

//Soal latihan 2
//Soal latihan 2
var ja1=document.getElementById("ja1");
var ja2=document.getElementById("ja2");
var ja3=document.getElementById("ja3");
var ja4=document.getElementById("ja4");

function cek2(){

    
    if(document.getElementById("ja1").checked) {
        hasil1.style.display="";
        $("#jawabanbenar2").hide(0);
        $("#jawabansalah2").show(200);
    } else{
      hasil1.style.display="none";
    }
    if(document.getElementById("ja2").checked) {
      hasil2.style.display="";
      $("#jawabanbenar2").hide(0);
      $("#jawabansalah2").show(200);
    } else{
      hasil2.style.display="none";
    }
    if(document.getElementById("ja3").checked) {
      hasil3.style.display="";
      $("#jawabanbenar2").hide(0);
      $("#jawabansalah2").show(200);
    } else{
      hasil3.style.display="none";
    }
    if(document.getElementById("ja4").checked) {
      hasil4.style.display="";
      kesimpulan.style.display="";
      hidekesimpulan.style.display="none";
      $("#jawabanbenar2").show(200);
        $("#jawabansalah2").hide(0);
    }  else{
      hasil4.style.display="none";
    }

}
