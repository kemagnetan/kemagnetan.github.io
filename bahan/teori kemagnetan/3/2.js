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
function check() {
    var ret=false;
    var myid=document.getElementById("myid");
    var myvar=myid.value;
    var x=1.5;
    if(myvar != x) { //value yg diijinkan hanya numerik, integer maupun float
        myid.style.color="#f00";
        document.getElementById("p1").innerHTML = "Jawaban Belum Tepat";
        document.getElementById("p1").style.backgroundColor="#f00";
        document.getElementById("p1").style.color="#ffffff";
        ret=false;
    }
    
    if(myvar == x) { //value yg diijinkan hanya numerik, integer maupun float
        myid.style.color="#257C9F";
        document.getElementById("p1").innerHTML = "Benar";
        document.getElementById("p1").style.backgroundColor="#1ed148";
        document.getElementById("p1").style.color="#ffffff";
        ret=false;
    }
    return ret;
}

function check2() {
    var ret=false;
    var myid2=document.getElementById("myid2");
    var myvar2=myid2.value;
    var x1=0.2;
    if(myvar2 != x1) { //value yg diijinkan hanya numerik, integer maupun float
        myid2.style.color="#f00";
        document.getElementById("p2").innerHTML = "Jawaban Belum Tepat";
        document.getElementById("p2").style.backgroundColor="#f00";
        document.getElementById("p2").style.color="#ffffff";
        ret=false;
    }
    
    if(myvar2 == x1) { //value yg diijinkan hanya numerik, integer maupun float
        myid2.style.color="#257C9F";
        document.getElementById("p2").innerHTML = "Benar";
        document.getElementById("p2").style.backgroundColor="#1ed148";
        document.getElementById("p2").style.color="#ffffff";
        ret=false;
    }
    return ret;
}
function check3() {
    var ret=false;
    var myid3=document.getElementById("myid3");
    var myid4=document.getElementById("myid4");
    var myvar3=myid3.value;
    var myvar4=myid4.value;

    var x1=2;
    var x2=10;
    if(myvar3 != x1 && myid4 != x2) { //value yg diijinkan hanya numerik, integer maupun float
        myid3.style.color="#f00";
        myid3.style.color="#f00";
        document.getElementById("p3").innerHTML = "Jawaban Belum Tepat";
        document.getElementById("p3").style.backgroundColor="#f00";
        document.getElementById("p3").style.color="#ffffff";
        ret=false;
    }
    
    if(myvar3 == x1 && myvar4 == x2) { //value yg diijinkan hanya numerik, integer maupun float
        myid3.style.color="#257C9F";
        myid4.style.color="#257C9F";
        document.getElementById("p3").innerHTML = "Benar";
        document.getElementById("p3").style.backgroundColor="#1ed148";
        document.getElementById("p3").style.color="#ffffff";
        ret=false;
    }
    return ret;
}