

//navigasi gambar

function gbr1(){
    deklinasi.style.display="";
    inklinasi.style.display="none";


    tombol1.style.background="black";
    tombol2.style.background="#04709b";

}
function gbr2(){
  deklinasi.style.display="none";
  inklinasi.style.display="";

    tombol1.style.background="#04709b";
    tombol2.style.background="black";
}

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
       kesimpulan.style.display=""; //kesimpulan
       sebelum.style.display="none"; //kesimpulan
   }   
   if(document.getElementById("s2salah").checked){
       j2salah.style.display="";
       j2benar.style.display="none";

   }
 }

 function selesaibaca(){

  latihanhide.style.display="";

  }
