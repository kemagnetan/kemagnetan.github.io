//----------------------------konfigurasi----------------------------------

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyAXTrIuXO4OGau7EliaUj6XE-7OS0FIN8Q",
        authDomain: "percobaan-3aa8e.firebaseapp.com",
        databaseURL: "https://percobaan-3aa8e-default-rtdb.firebaseio.com",
        projectId: "percobaan-3aa8e",
        storageBucket: "percobaan-3aa8e.appspot.com",
        messagingSenderId: "51589690048",
        appId: "1:51589690048:web:e63a8de81c95edc3d7f325",
        measurementId: "G-D8GZMGNJ69"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

window.onload =function(){
    

    navigasi.style.display="none";
    hasil_skor.style.display="none";
    let noomor = document.querySelector('#no_soal');
    noomor.innerText="1";

    dataKkm();
    dataKontrol();

}
function navTampil(){
    var x = document.getElementById("navigasi");
    if (x.style.display === "none") {
        $("#navigasi").fadeIn(300);
        
    } else {
        $("#navigasi").fadeOut(300);
    }
}

namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');

let sekolahfix = '';
let kelasfix = '';

function mulai() {

    let cek = 0;

    if (namanya.value != "") {
        cek=+1;
    } 

    if (kelasnya.value != "0") {
       
        if (kelasnya.value == "1") {
            kelasfix = "9A";
        } else if (kelasnya.value == "2") {
            kelasfix = "9B";
        } else if (kelasnya.value == "3") {
            kelasfix = "9C";
        } else if (kelasnya.value == "4") {
            kelasfix = "9D";
        } else if (kelasnya.value == "5") {
            kelasfix = "9E";
        } else if (kelasnya.value == "6") {
            kelasfix = "9F";
        } else if (kelasnya.value == "7") {
            kelasfix = "9G";
        } else if (kelasnya.value == "8") {
            kelasfix = "9H";
        } else if (kelasnya.value == "9") {
            kelasfix = "9I";
        }
        cek += 1;
    }


    if (sekolah.value != "0") {

        if (sekolah.value == "1") {
            sekolahfix = "SMP Negeri 2 Banjarmasin";
        } 
        cek += 1;
    }

    // console.log(sekolahfix);

    if (cek != 3) {
        alert("Data diri anda belum lengkap");
    } else if (cek == 3) {
 
        data_diri.style.display="none"
        badan.style.display="";

    }
    // console.log(namanya.value);
    // console.log(kelasfix);
    // console.log(sekolahfix);

    random();
    next();
    isiRandArray();
    console.log(emptyArray);
    console.log(randArray);
    console.log(rand);

    var menit = 60 * 30,
    display = document.querySelector('#time');
    startTimer(menit, display);
}
    
     // timer pada soal
     function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;
            timer_s=timer;
            if (--timer < 0) {
                timer = "0";
                waktuhabis.style.display="";
            }
        }, 1000);
    }

    function refresh(){
        location.reload();
    }

var emptyArray=[]; // array untuk menyimpan soal id dari database
var randArray=[]; // array untuk menyimpan soal id ke soal yg dirandom
var Namagambar=[]; // array untuk menyimpan gambar nama dari database
var linkGambar=[]; // array untuk menyimpan gambar nama dari database
var rand=[];

//mengambil data id dari firebase
$(document).ready(function(){
    var rootRef = firebase.database().ref().child("soalEvaluasi/");
    rootRef.on("child_added", snap => {
    var id = snap.child("soalid").val();
    emptyArray.push(id); // push soalid ke emptyarray
    });
    
   
});
      //mengambil data link dari firebase
      $(document).ready(function(){
        var rootRef = firebase.database().ref().child("gambar4/");
        rootRef.on("child_added", snap => {
        var id = snap.child("Link").val();
        linkGambar.push(id); // push link gambar ke emptyarray
        });
    });

 //mengambil data link dari firebase
 $(document).ready(function(){
    var rotRef = firebase.database().ref().child("gambar4/");
    rotRef.on("child_added", snap => {
    var idd = snap.child("Nama").val();
    Namagambar.push(idd); // push nama gambar ke Namagambar
    });
    

});
//==========================
function isiRandArray(){
    for(let i=0;i<20;i++){
        var x=rand[i];
        randArray[i]=emptyArray[x];
    }
}
// acak urutan soal
//random urutan
function random() {

        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * emptyArray.length) + 0; //data.length untuk jumlah soal yg ditampilkan
            rand.push(angka);
        }
        // membuang angka yang sama
        rand = Array.from(new Set(rand));
        // console.log(rand);
        // console.log(emptyArray);

}

//===================================================================================================================
var bantu=0;
var kkm;
var batas_soal=0;
var prep;
var neks;
var btn;
var kunci_jawaban;
var simpan_skor;
var simpan_jwb=[];//array untuk menyimpan jawaban berurutan
var benar_salah=[];//menyimpan jawaban benar salah dengan 1 dan 0
var jwb_rand=[];//array untuk menyimpan jawaban dari soal random
var soal_tampil;
var skor=0;
var total_terjawab=[]



function next(){
    pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
    
    
    console.log(jwb_rand);

    neks=true;

    if (prep==true){
        batas_soal=batas_soal+2;
        bantu=bantu+2;

        prep=false;
    }
    if(btn==true){
        batas_soal=batas_soal+1;
        bantu=bantu+1;
    }

    var indexx=rand[bantu];


    if(batas_soal<=20){
        firebase.database().ref().child("soalEvaluasi").orderByChild("soalid").equalTo(emptyArray[indexx]).once("value", function(snapshot){
            snapshot.forEach(function(childSnapshot){
                var soalid=childSnapshot.child("soalid").val();
                var soal=childSnapshot.child("soal").val();
                var opt1=childSnapshot.child("opt1").val();
                var opt2=childSnapshot.child("opt2").val();
                var opt3=childSnapshot.child("opt3").val();
                var opt4=childSnapshot.child("opt4").val();
                kunci_jawaban=childSnapshot.child("kunci_jawaban").val();
                
                
                var t_soal = document.getElementById("t_soal");
                    t_soal.innerHTML = soal;
                var jwb1 = document.getElementById("jwb1");
                    jwb1.innerHTML = opt1;
                var jwb2 = document.getElementById("jwb2");
                    jwb2.innerHTML = opt2;
                var jwb3 = document.getElementById("jwb3");
                    jwb3.innerHTML = opt3;
                var jwb4 = document.getElementById("jwb4");
                    jwb4.innerHTML = opt4;

            ////mengambil link gambar dan menampilkannya
            var htmls = [];
            var Gambar;
             for(let ii=0;ii<Namagambar.length;ii++){
                  if(soalid==Namagambar[ii]){
                     Gambar=linkGambar[ii];
       
                      htmls.push('<center><img width="50%" src="'+Gambar+'"></center>');
                      $('#gambar').html(htmls);
                   }else{
                         htmls.push('<a><a/>');
                         $('#gambar').html(htmls);
                        }
            }

                     //console.log(emptyArray[indexx]);
                    // console.log(indexx);
            });
        }); 

        bantu++;
        batas_soal++;
        btn=false;
        // console.log(bantu);
        //  console.log(jwb_rand[bantu]);
    } 
    if(batas_soal==randArray.length){ 
        disabel();
        }else{
            enabel();
        }
    if(batas_soal==-1){ 
            disabel2();
            }else{
                enabel2();
        }
    soal_tampil=emptyArray[indexx];
    isiradio();
   
}
//disabel tombol selanjutnya
function disabel() {
    var x = document.getElementById("Selanjutnya");
    x.disabled = true;
}
function enabel() {
    var x = document.getElementById("Selanjutnya");
    x.disabled = false;
}

//disabel tombol selanjutnya
function disabel2() {
    var y = document.getElementById("sebelumnya");
    y.disabled = true;
}
function enabel2() {
    var y = document.getElementById("sebelumnya");
    y.disabled = false;
}

//=============================================================================================================
function prev(){//fungsi button sebelumnya
    
    pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
    
    prep=true;

    if (neks==true){
        batas_soal=batas_soal-2;
        bantu=bantu-2;

        neks=false;
    }
    if(btn==true){
        batas_soal=batas_soal-1;
        bantu=bantu-1;
    }
    
    console.log(batas_soal);
    var indexx=rand[bantu];
    

    if(batas_soal>=-1){
        firebase.database().ref().child("soalEvaluasi").orderByChild("soalid").equalTo(emptyArray[indexx]).once("value", function(snapshot){
            snapshot.forEach(function(childSnapshot){
                var soalid=childSnapshot.child("soalid").val();
                var soal=childSnapshot.child("soal").val();
                var opt1=childSnapshot.child("opt1").val();
                var opt2=childSnapshot.child("opt2").val();
                var opt3=childSnapshot.child("opt3").val();
                var opt4=childSnapshot.child("opt4").val();
                kunci_jawaban=childSnapshot.child("kunci_jawaban").val();
                
                
                var t_soal = document.getElementById("t_soal");
                    t_soal.innerHTML = soal;
                var jwb1 = document.getElementById("jwb1");
                    jwb1.innerHTML = opt1;
                var jwb2 = document.getElementById("jwb2");
                    jwb2.innerHTML = opt2;
                var jwb3 = document.getElementById("jwb3");
                    jwb3.innerHTML = opt3;
                var jwb4 = document.getElementById("jwb4");
                    jwb4.innerHTML = opt4;

            ////mengambil link gambar dan menampilkannya
            var htmls = [];
            var Gambar;
             for(let ii=0;ii<Namagambar.length;ii++){
                  if(soalid==Namagambar[ii]){
                     Gambar=linkGambar[ii];
       
                      htmls.push('<center><img width="50%" src="'+Gambar+'"></center>');
                      $('#gambar').html(htmls);
                   }else{
                         htmls.push('<a><a/>');
                         $('#gambar').html(htmls);
                        }
            }
                    //console.log(emptyArray[indexx]);
                    // console.log(indexx);
            });
        }); 
        bantu--;
        batas_soal--;
        btn=false;
        // console.log(bantu);
        // console.log(batas_soal);

        if(batas_soal==-1){ 
            disabel2();
            }else{
                enabel2();
            }
        if(batas_soal==emptyArray.length){ 
                disabel();
            }else{
                enabel();
            }

    } else{ 

         alert("soal habis")
    }

    soal_tampil=emptyArray[indexx];
    isiradio();

    
}


//simpan jawaban===============================================================================================
var jawaban;
function simpan(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
    jawaban = selectedOption.value;

    // menyimpan jawaban sesuai dengan soal acak
    if(soal_tampil==randArray[0]){
        jwb_rand[0]=jawaban;
        if (jawaban!=""){
            tombol1.style.background="rgb(7, 182, 138)";
            total_terjawab[0]=1;
        }
    }else if(soal_tampil==randArray[1]){
        jwb_rand[1]=jawaban;
        if (jawaban!=""){
            tombol2.style.background="rgb(7, 182, 138)";
            total_terjawab[1]=1;
        }
    }else if(soal_tampil==randArray[2]){
        jwb_rand[2]=jawaban;
        if (jawaban!=""){
            tombol3.style.background="rgb(7, 182, 138)";
            total_terjawab[2]=1;
        }
    }else if(soal_tampil==randArray[3]){
        jwb_rand[3]=jawaban;
        if (jawaban!=""){
            tombol4.style.background="rgb(7, 182, 138)";
            total_terjawab[3]=1;
        }
    }else if(soal_tampil==randArray[4]){
        jwb_rand[4]=jawaban;
        if (jawaban!=""){
            tombol5.style.background="rgb(7, 182, 138)";
            total_terjawab[4]=1;
        }
    }else if(soal_tampil==randArray[5]){
        jwb_rand[5]=jawaban;
        if (jawaban!=""){
            tombol6.style.background="rgb(7, 182, 138)";
            total_terjawab[5]=1;
        }
    }else if(soal_tampil==randArray[6]){
        jwb_rand[6]=jawaban;
        if (jawaban!=""){
            tombol7.style.background="rgb(7, 182, 138)";
            total_terjawab[6]=1;
        }
    }else if(soal_tampil==randArray[7]){
        jwb_rand[7]=jawaban;
        if (jawaban!=""){
            tombol8.style.background="rgb(7, 182, 138)";
            total_terjawab[7]=1;
        }
    }else if(soal_tampil==randArray[8]){
        jwb_rand[8]=jawaban;
        if (jawaban!=""){
            tombol9.style.background="rgb(7, 182, 138)";
            total_terjawab[8]=1;
        }
    }else if(soal_tampil==randArray[9]){
        jwb_rand[9]=jawaban;
        if (jawaban!=""){
            tombol10.style.background="rgb(7, 182, 138)";
            total_terjawab[9]=1;
        }
    }else if(soal_tampil==randArray[10]){
        jwb_rand[10]=jawaban;
        if (jawaban!=""){
            tombol11.style.background="rgb(7, 182, 138)";
            total_terjawab[10]=1;
        }
    }else if(soal_tampil==randArray[11]){
        jwb_rand[11]=jawaban;
        if (jawaban!=""){
            tombol12.style.background="rgb(7, 182, 138)";
            total_terjawab[11]=1;
        }
    }else if(soal_tampil==randArray[12]){
        jwb_rand[12]=jawaban;
        if (jawaban!=""){
            tombol13.style.background="rgb(7, 182, 138)";
            total_terjawab[12]=1;
        }
    }else if(soal_tampil==randArray[13]){
        jwb_rand[13]=jawaban;
        if (jawaban!=""){
            tombol14.style.background="rgb(7, 182, 138)";
            total_terjawab[13]=1;
        }
    }else if(soal_tampil==randArray[14]){
        jwb_rand[14]=jawaban;
        if (jawaban!=""){
            tombol15.style.background="rgb(7, 182, 138)";
            total_terjawab[14]=1;
        }
    }else if(soal_tampil==randArray[15]){
        jwb_rand[15]=jawaban;
        if (jawaban!=""){
            tombol16.style.background="rgb(7, 182, 138)";
            total_terjawab[15]=1;
        }
    }else if(soal_tampil==randArray[16]){
        jwb_rand[16]=jawaban;
        if (jawaban!=""){
            tombol17.style.background="rgb(7, 182, 138)";
            total_terjawab[16]=1;
        }
    }else if(soal_tampil==randArray[17]){
        jwb_rand[17]=jawaban;
        if (jawaban!=""){
            tombol18.style.background="rgb(7, 182, 138)";
            total_terjawab[17]=1;
        }
    }else if(soal_tampil==randArray[18]){
        jwb_rand[18]=jawaban;
        if (jawaban!=""){
            tombol19.style.background="rgb(7, 182, 138)";
            total_terjawab[18]=1;
        }
    }else if(soal_tampil==randArray[19]){
        jwb_rand[19]=jawaban;
        if (jawaban!=""){
            tombol20.style.background="rgb(7, 182, 138)";
            total_terjawab[19]=1;
        }
    }
    // menyimpan jawaban secara berurutan
    // menyimpan jawaban secara berurutan
    for (let ind=0;ind<emptyArray.length;ind++){
        
        if(soal_tampil==emptyArray[ind]){
            simpan_jwb[ind]=jawaban;
    
            // if(jawaban==kunci_jawaban && simpan_skor[ind]==0){
            //     simpan_skor[ind]=simpan_skor[0]+10;
            // } else if(jawaban==kunci_jawaban && simpan_skor[0]==10){
            //     simpan_skor[ind]=10;
            // } else if(jawaban!=kunci_jawaban){
            //     simpan_skor[ind]=0;
            // }

            if(jawaban==kunci_jawaban){
                benar_salah[ind]="benar";
            }else{
                benar_salah[ind]="salah";
            }
            
        }
    }
    // if(soal_tampil==emptyArray[0]){
    //     simpan_jwb[0]=jawaban;

    //     if(jawaban==kunci_jawaban && simpan_skor[0]==0){
    //         simpan_skor[0]=simpan_skor[0]+10;
    //     } else if(jawaban==kunci_jawaban && simpan_skor[0]==10){
    //         simpan_skor[0]=10;
    //     } else if(jawaban!=kunci_jawaban){
    //         simpan_skor[0]=0;
    //     }
        
    // }
    // if(soal_tampil==emptyArray[1]){
    //     simpan_jwb[1]=jawaban;

    //     if(jawaban==kunci_jawaban && simpan_skor[1]==0){
    //         simpan_skor[1]=simpan_skor[1]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[1]==10){
    //         simpan_skor[1]=10;
    //     }else if(jawaban!=kunci_jawaban){
    //         simpan_skor[1]=0;
    //     } 
        
    // }
    // if(soal_tampil==emptyArray[2]){
    //     simpan_jwb[2]=jawaban;

    //     if(jawaban==kunci_jawaban && simpan_skor[2]==0){
    //         simpan_skor[2]=simpan_skor[2]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[2]==10){
    //         simpan_skor[2]=10;
    //     } else if(jawaban!=kunci_jawaban){
    //         simpan_skor[2]=0;
    //     }

    // }   
    // if(soal_tampil==emptyArray[3]){
    //     simpan_jwb[3]=jawaban;
    //     if(jawaban==kunci_jawaban && simpan_skor[3]==0){
    //         simpan_skor[3]=simpan_skor[3]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[3]==10){
    //         simpan_skor[3]=10;
    //     }else if(jawaban!=kunci_jawaban){
    //         simpan_skor[3]=0;
    //     } 

    // }   
    // if(soal_tampil==emptyArray[4]){
    //     simpan_jwb[4]=jawaban;
    //     if(jawaban==kunci_jawaban && simpan_skor[4]==0){
    //         simpan_skor[4]=simpan_skor[4]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[4]==10){
    //         simpan_skor[4]=10;
    //     }else if(jawaban!=kunci_jawaban){
    //         simpan_skor[4]=0;
    //     } 

    // } 
    // if(soal_tampil==emptyArray[5]){
    //     simpan_jwb[5]=jawaban;
    //     if(jawaban==kunci_jawaban && simpan_skor[5]==0){
    //         simpan_skor[5]= simpan_skor[5]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[5]==10){
    //         simpan_skor[5]=10;
    //     }else if(jawaban!=kunci_jawaban){
    //         simpan_skor[5]=0;
    //     }
    // }
    // if(soal_tampil==emptyArray[6]){
    //     simpan_jwb[6]=jawaban;
    //     if(jawaban==kunci_jawaban && simpan_skor[6]==0){
    //         simpan_skor[6]=simpan_skor[6]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[6]==10){
    //         simpan_skor[6]=10;
    //     }else if(jawaban!=kunci_jawaban){
    //         simpan_skor[6]=0;
    //     } 
    // } 
    
    // if(soal_tampil==emptyArray[7]){
    //     simpan_jwb[7]=jawaban;
    //     if(jawaban==kunci_jawaban && simpan_skor[7]==0){
    //         simpan_skor[7]=simpan_skor[7]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[7]==10){
    //         simpan_skor[7]=10;
    //     }else if(jawaban!=kunci_jawaban){
    //         simpan_skor[7]=0;
    //     } 
    // } 
    
    // if(soal_tampil==emptyArray[8]){
    //     simpan_jwb[8]=jawaban;
    //     if(jawaban==kunci_jawaban && simpan_skor[8]==0){
    //         simpan_skor[8]= simpan_skor[8]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[8]==10){
    //         simpan_skor[8]=10;
    //     }else if(jawaban!=kunci_jawaban){
    //         simpan_skor[8]=0;
    //     } 
       
    // } 
    // if(soal_tampil==emptyArray[9]){
    //     simpan_jwb[9]=jawaban;
    //     if(jawaban==kunci_jawaban && simpan_skor[9]==0){
    //         simpan_skor[9]=simpan_skor[9]+10;
    //     }else if(jawaban==kunci_jawaban && simpan_skor[9]==10){
    //         simpan_skor[9]=10;
    //     }else if(jawaban!=kunci_jawaban){
    //         simpan_skor[9]=0;
    //     } 
    // }


    // console.log(kunci_jawaban);
    // console.log(simpan_skor);
    
}

//fungsi untuk mengisi radio button yang pernah dipilih
function isiradio(){

    let noomor = document.querySelector('#no_soal');
    

    if (soal_tampil==randArray[0]){
        noomor.innerText = "1";
        if (jwb_rand[0]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[0]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[0]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[0]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[1]){
        noomor.innerText = "2";
        if (jwb_rand[1]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[1]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[1]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[1]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[2]){
        noomor.innerText = "3";
        if (jwb_rand[2]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[2]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[2]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[2]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[3]){
        noomor.innerText = "4";
        if (jwb_rand[3]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[3]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[3]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[3]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[4]){
        noomor.innerText = "5";
        if (jwb_rand[4]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[4]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[4]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[4]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[5]){
        noomor.innerText = "6";
        if (jwb_rand[5]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[5]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[5]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[5]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[6]){
        noomor.innerText = "7";
        if (jwb_rand[6]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[6]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[6]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[6]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[7]){
        noomor.innerText = "8";
        if (jwb_rand[7]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[7]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[7]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[7]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[8]){
        noomor.innerText = "9";
        if (jwb_rand[8]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[8]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[8]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[8]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[9]){
        noomor.innerText = "10";
        if (jwb_rand[9]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[9]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[9]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[9]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[10]){
        noomor.innerText = "11";
        if (jwb_rand[10]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[10]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[10]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[10]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[11]){
        noomor.innerText = "12";
        if (jwb_rand[11]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[11]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[11]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[11]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[12]){
        noomor.innerText = "13";
        if (jwb_rand[12]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[12]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[12]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[12]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[13]){
        noomor.innerText = "14";
        if (jwb_rand[13]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[13]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[13]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[13]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[14]){
        noomor.innerText = "15";
        if (jwb_rand[14]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[14]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[14]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[14]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[15]){
        noomor.innerText = "16";
        if (jwb_rand[15]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[15]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[15]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[15]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[16]){
        noomor.innerText = "17";
        if (jwb_rand[16]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[16]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[16]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[16]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[17]){
        noomor.innerText = "18";
        if (jwb_rand[17]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[17]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[17]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[17]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[18]){
        noomor.innerText = "19";
        if (jwb_rand[18]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[18]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[18]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[18]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    if (soal_tampil==randArray[19]){
        noomor.innerText = "20";
        if (jwb_rand[19]=="a"){
            pilihan1.checked = true; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[19]=="b"){
            pilihan1.checked = false; pilihan2.checked = true; pilihan3.checked = false; pilihan4.checked = false;
        }else  if (jwb_rand[19]=="c"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = true; pilihan4.checked = false;
        }else  if (jwb_rand[19]=="d"){
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = true;
        }else {
            pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
        } 
    }
    console.log(soal_tampil);
    console.log(randArray);

}
var panggil;
tombol1.addEventListener('click', function () {
    panggil=0;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    disabel2();
    prep=false;
    neks=false;
     
    
});
tombol2.addEventListener('click', function () {
    panggil=1;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    enabel2();
    prep=false;
    neks=false;
     
});
tombol3.addEventListener('click', function () {
    panggil=2;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    enabel2();
    prep=false;
    neks=false;
     
});
tombol4.addEventListener('click', function () {
    panggil=3;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    enabel2();
    prep=false;
    neks=false;
     
});
tombol5.addEventListener('click', function () {
    panggil=4;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    enabel2();
    prep=false;
    neks=false;
    
});
tombol6.addEventListener('click', function () {
    panggil=5;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    enabel2();
    prep=false;
    neks=false;
});
tombol7.addEventListener('click', function () {
    panggil=6;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    enabel2();
    prep=false;
    neks=false;
});
tombol8.addEventListener('click', function () {
    panggil=7;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    enabel2();
    prep=false;
    neks=false;
});
tombol9.addEventListener('click', function () {
    panggil=8;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    enabel();
    enabel2();
    prep=false;
    neks=false;
});
tombol10.addEventListener('click', function () {
    panggil=9;
    tampil_soal_rand();
    bantu=panggil;
    batas_soal=panggil;
    btn=true;
    disabel();
    enabel2();
    prep=false;
    neks=false;
});

//fungsi menampilkan soal
        function tampil_soal_rand(){
            firebase.database().ref().child("soalEvaluasi").orderByChild("soalid").equalTo(randArray[panggil]).once("value", function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var soalid=childSnapshot.child("soalid").val();
                    var soal=childSnapshot.child("soal").val();
                    var opt1=childSnapshot.child("opt1").val();
                    var opt2=childSnapshot.child("opt2").val();
                    var opt3=childSnapshot.child("opt3").val();
                    var opt4=childSnapshot.child("opt4").val();
                    kunci_jawaban=childSnapshot.child("kunci_jawaban").val();
                    
                    
                    var t_soal = document.getElementById("t_soal");
                        t_soal.innerHTML = soal;
                    var jwb1 = document.getElementById("jwb1");
                        jwb1.innerHTML = opt1;
                    var jwb2 = document.getElementById("jwb2");
                        jwb2.innerHTML = opt2;
                    var jwb3 = document.getElementById("jwb3");
                        jwb3.innerHTML = opt3;
                    var jwb4 = document.getElementById("jwb4");
                        jwb4.innerHTML = opt4;
                    
            ////mengambil link gambar dan menampilkannya
            var htmls = [];
            var Gambar;
             for(let ii=0;ii<Namagambar.length;ii++){
                  if(soalid==Namagambar[ii]){
                     Gambar=linkGambar[ii];
       
                      htmls.push('<center><img width="50%" src="'+Gambar+'"></center>');
                      $('#gambar').html(htmls);
                   }else{
                         htmls.push('<a><a/>');
                         $('#gambar').html(htmls);
                        }
            }
 
    
                });
            }); 
            //menampilkan gambar
            soal_tampil=randArray[panggil];
            isiradio();
            
        }



// menyimpan ke dalam databasenya

var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    harii = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[harii] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}




function createTask(sekolah, nama, kelas, waktunya, hari, simpan_jwb,skor,benar_salah) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        waktu: waktunya,
        hari: hari,
        jawabannya: simpan_jwb,
        skor: skor,
        benar_salah:benar_salah
    }

    let db = firebase.database().ref("evaluasi/" + counter);
    db.set(task);

}

function selesai(){
    var jwb=0;
    for (let b=0;b<10;b++){
      jwb=jwb+total_terjawab[b];
    }

    if (jwb != 10){
        alert("Masih ada soal yang belum terjawab");
    }else{
        
    //skor=simpan_skor[0]+simpan_skor[1] +  simpan_skor[2] +simpan_skor[3] +simpan_skor[4] +simpan_skor[5] +simpan_skor[6] +simpan_skor[7] +simpan_skor[8] +simpan_skor[9];  
    
    console.log(skor);
		 let waktunya = waktu();
		 let harinya = hari();
         
         for(let c=0;c<emptyArray.length;c++){
            if(benar_salah[c]=="benar"){
                skor=skor+10;
            }
        }
		 createTask(sekolahfix, namanya.value.toUpperCase(), kelasfix, waktunya, harinya, simpan_jwb,skor,benar_salah);
         
         
         //Mengisi pop up hasil kuis/evaluasi

         let namainput = document.querySelector('.nama');
         namainput.innerText = namanya.value.toUpperCase();

         let sekolahinput = document.querySelector('.sekolah');
         sekolahinput.innerText = sekolahfix;

         let kelasinput = document.querySelector('.kelas');
         kelasinput.innerText = kelasfix;

         let hariinput = document.querySelector('.hari');
         hariinput.innerText = harinya;

         let waktuinput = document.querySelector('.waktu');
         waktuinput.innerText = waktunya;

         let hasillinput = document.querySelector('.skor');
         hasillinput.innerText = skor;

         hasil_skor.style.display="";
         badan.style.display="none";
         navigasi.style.display="none";

         if (skor>=kkm){
            gagal.style.display="none";
         }else{
            berhasil.style.display="none";
         }



        //  console.log(simpan_jwb);
        //  console.log(jwb_rand);
        //  console.log(emptyArray);
        console.log(simpan_skor);
       
    } 

}

function dataKkm(){
    firebase.database().ref('KKM/').once('value',
    function(AllRecords1){
        AllRecords1.forEach(
            function(CurrentRecord){
                var evaluasi=CurrentRecord.val().evaluasi;

                datak(evaluasi);
            }
        );

    });
}
function datak(evaluasi){
   kkm=evaluasi;
    console.log(kkm);
}

//mengambil data kontrol =========================
function dataKontrol(){
    firebase.database().ref('kontrol/').once('value',
    function(AllRecords1){
        AllRecords1.forEach(
            function(CurrentRecord){
                var kontrol=CurrentRecord.val().evaluasi;

                akses(kontrol);
            }
        );

    });
}
function akses(kontrol){
    if (kontrol==0){
        popup.style.display="";
    }
    console.log(kontrol);
}