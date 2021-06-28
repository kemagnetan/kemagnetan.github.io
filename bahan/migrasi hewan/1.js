//mengarahkan menit tertentu dengan button
//mengarahkan menit tertentu dengan button
var vid = document.getElementById("vidio");
function burung() { 
    vid.currentTime=0;
    vid.play();
  } 
  function salmon() { 
    vid.currentTime=97;
    vid.play();
  } 
  function penyu() { 
    vid.currentTime=152;
    vid.play();
  } 
  function lobster() { 
    vid.currentTime=217.5;
    vid.play();
  } 
  function bakteri() { 
    vid.currentTime=270;
    vid.play();
  } 
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.kesimpulan').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.kesimpulan').show(100);
    $('.sebelum').hide(100);
  }
  
});
