



//mengarahkan menit tertentu dengan button
//mengarahkan menit tertentu dengan button
var vid = document.getElementById("vidio");
function alat() { 
    vid.currentTime=13;
    vid.play();
  } 
  function coba() { 
    vid.currentTime=52;
    vid.play();
  } 
  
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.kesimpulan1').hide();
    $('.kesimpulan').hide();
    $('.latihanhide').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.latihanhide').show();
    $('.kesimpulan1').show();
  }
  
});

//Latihan 
function cek(){
  kesimpulansebelum.style.display="none";
  kesimpulan.style.display="";

  if(document.getElementById("s1benar").checked) {
    pil1.style.background="green";
    pil1.style.color="white";
  }  else{
    pil1.style.background="red";
    pil1.style.color="white";
  }

  if(document.getElementById("s2benar").checked) {
    pil2.style.background="green";
    pil2.style.color="white";
  }  else{
    pil2.style.background="red";
    pil2.style.color="white";
  }

  if(document.getElementById("s3benar").checked) {
    pil3.style.background="green";
    pil3.style.color="white";
  }  else{
    pil3.style.background="red";
    pil3.style.color="white";
  }

  if(document.getElementById("s4benar").checked) {
    pil4.style.background="green";
    pil4.style.color="white";
  }  else{
    pil4.style.background="red";
    pil4.style.color="white";
  }

  if(document.getElementById("s5benar").checked) {
    pil5.style.background="green";
    pil5.style.color="white";
  }  else{
    pil5.style.background="red";
    pil5.style.color="white";
  }

  if(document.getElementById("s6benar").checked) {
    pil6.style.background="green";
    pil6.style.color="white";
  }  else{
    pil6.style.background="red";
    pil6.style.color="white";
  }

  if(document.getElementById("s7benar").checked) {
    pil7.style.background="green";
    pil7.style.color="white";
  }  else{
    pil7.style.background="red";
    pil7.style.color="white";
  }

  if(document.getElementById("s8benar").checked) {
    pil8.style.background="green";
    pil8.style.color="white";
  }  else{
    pil8.style.background="red";
    pil8.style.color="white";
  }

  if(document.getElementById("s9benar").checked) {
    pil9.style.background="green";
    pil9.style.color="white";
  }  else{
    pil9.style.background="red";
    pil9.style.color="white";
  }

  if(document.getElementById("s10benar").checked) {
    pil10.style.background="green";
    pil10.style.color="white";
  }  else{
    pil10.style.background="red";
    pil10.style.color="white";
  }

  if(document.getElementById("s11benar").checked) {
    pil11.style.background="green";
    pil11.style.color="white";
  }  else{
    pil11.style.background="red";
    pil11.style.color="white";
  }

  if(document.getElementById("s12benar").checked) {
    pil12.style.background="green";
    pil12.style.color="white";
  }  else{
    pil12.style.background="red";
    pil12.style.color="white";
  }

  if(document.getElementById("s13benar").checked) {
    pil13.style.background="green";
    pil13.style.color="white";
  }  else{
    pil13.style.background="red";
    pil13.style.color="white";
  }

  if(document.getElementById("s14benar").checked) {
    pil14.style.background="green";
    pil14.style.color="white";
  }  else{
    pil14.style.background="red";
    pil14.style.color="white";
  }

  if(document.getElementById("s15benar").checked) {
    pil15.style.background="green";
    pil15.style.color="white";
  }  else{
    pil15.style.background="red";
    pil15.style.color="white";
  }

  if(document.getElementById("s16benar").checked) {
    pil16.style.background="green";
    pil16.style.color="white";
  }  else{
    pil16.style.background="red";
    pil16.style.color="white";
  }
}
 