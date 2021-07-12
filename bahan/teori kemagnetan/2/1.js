

//navigasi gambar

function gbr1(){
    deklinasi.style.display="";
    inklinasi.style.display="none";


    tombol.style.background="black";
    tombol2.style.background="#04709b";

}
function gbr2(){
  deklinasi.style.display="none";
  inklinasi.style.display="";

    tombol.style.background="#04709b";
    tombol2.style.background="black";
}

//Latihan 
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
      $("#1jawabansalah").show(100);
      $("#1jawabanbenar").hide(100);
  }
}

function cek2(){
  if(document.getElementById("s2benar").checked) {
       j2benar.style.display="";
       j2salah.style.display="none";
       $("#2jawabanbenar").show(100);
       $("#2jawabansalah").hide(100);
       kesimpulan.style.display=""; //kesimpulan
       sebelum.style.display="none"; //kesimpulan
   }   
   if(document.getElementById("s2salah").checked){
       j2salah.style.display="";
       j2benar.style.display="none";
       $("#2jawabansalah").show(100);
       $("#2jawabanbenar").hide(100);

   }
 }

 function selesaibaca(){

  latihanhide.style.display="";

  }
