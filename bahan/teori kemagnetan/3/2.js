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

        ret=false;
        $("#jawabanbenar1").hide(0);
        $("#jawabansalah1").show(200);
    }
    
    if(myvar == x) { //value yg diijinkan hanya numerik, integer maupun float
        myid.style.color="green";

        ret=false;

        $("#jawabanbenar1").show(200);
        $("#jawabansalah1").hide(0);
    }
    return ret;
}

function check2() {
    var ret=false;
    var myid2=document.getElementById("myid2");
    var myvar2=myid2.value;
    var x1=0.2;
    if(myvar2 != x1) { //value yg diijinkan hanya numerik, integer maupun float
        myid2.style.color="#f00";;
        ret=false;

        $("#jawabanbenar2").hide(0);
        $("#jawabansalah2").show(200);
    }
    
    if(myvar2 == x1) { //value yg diijinkan hanya numerik, integer maupun float
        myid2.style.color="green";
        ret=false;

        $("#jawabanbenar2").show(200);
        $("#jawabansalah2").hide(0);
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
        myid4.style.color="#f00";
        ret=false;

        $("#jawabanbenar3").hide(0);
        $("#jawabansalah3").show(200);
    }
    
    if(myvar3 == x1 && myvar4 == x2) { //value yg diijinkan hanya numerik, integer maupun float
        myid3.style.color="#257C9F";
        myid4.style.color="#257C9F";
        ret=false;

        $("#jawabanbenar3").show(200);
        $("#jawabansalah3").hide(0);
    }
    return ret;
}