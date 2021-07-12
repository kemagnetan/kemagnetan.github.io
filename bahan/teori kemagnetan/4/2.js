var contoh=document.getElementById("contoh");
var latihan=document.getElementById("latihan");
var kontenlatihan=document.getElementById("kontenlatihan")

function cek(){
    
    latihan.style.display="";
    contoh.style.display="";

}
function cek2(){
    kontenlatihan.style.display="";

}
//Latihan

//Soal 1
function check() {
    var ret=false;
    var myid=document.getElementById("myid");
    var myid1=document.getElementById("myid1");
    var myvar=myid.value;
    var myvar1=myid1.value;
    var x=15;
    var y=20;
    if(myvar == x) { //jawaban benar
        myid.style.color="#ffffff";
        myid.style.backgroundColor="#1ed148";
        ret=false;
        
    } else{
        myid.style.color="#ffffff"
        myid.style.backgroundColor="#f00";
        ret=false;
    }
     
    if(myvar1 == y) { //jawaban benar
        myid1.style.color="#ffffff";
        myid1.style.backgroundColor="#1ed148";
        ret=false;
        
    } else{
        myid1.style.color="#ffffff"
        myid1.style.backgroundColor="#f00";
        ret=false;
    }
    if(myvar1 == y && myvar == x) { //jawaban benar
        $("#jawabanbenar").show(200);
        $("#jawabansalah").hide(0);
        ret=false;
        
    } else{
        $("#jawabanbenar").hide(0);
        $("#jawabansalah").show(200);
        ret=false;
    }
    return ret;
}
//soal 2
function check2() {
    var ret=false;
    var myid2=document.getElementById("myid2");
    var myvar2=myid2.value;
    var x1=11;
    if(myvar2 == x1) { //benar
        myid2.style.color="#ffffff";
        myid2.style.backgroundColor="#1ed148";
        $("#jawabanbenar2").show(200);
        $("#jawabansalah2").hide(0);
        ret=false;       
    }
    
    else{ //salah
        myid2.style.color="#ffffff"
        myid2.style.backgroundColor="#f00";
        $("#jawabanbenar2").hide(0);
        $("#jawabansalah2").show(200);
        ret=false;
    }
    return ret;
}
//Soal 3
function check3() {
    var ret=false;
    var myid3=document.getElementById("myid3");
    var myvar3=myid3.value;

    var x1=20;
    if(myvar3 == x1) { //benar
        myid3.style.color="#ffffff";
        myid3.style.backgroundColor="#1ed148";
        $("#jawabanbenar3").show(200);
        $("#jawabansalah3").hide(0);
        ret=false;       
    }
    
    else{ //salah
        myid3.style.color="#ffffff"
        myid3.style.backgroundColor="#f00";
        $("#jawabanbenar3").hide(0);
        $("#jawabansalah3").show(200);
        ret=false;
    }
    return ret;
}