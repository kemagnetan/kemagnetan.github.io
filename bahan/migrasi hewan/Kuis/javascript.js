let stng = document.querySelector('.icon1');
let wrna = document.querySelector('.warna');
let pilwarna= document.querySelectorAll('.warnanya');
let linknya =document.getElementsByTagName("link");
let head= document.querySelector("head");
let title =document.querySelector("title");
let body= document.querySelector("body");

// body.classList.toggle("hilang");


let cek = function(){
    let stylenyaa =localStorage.getItem("style");
    if(localStorage.getItem("style") != null){
        linknya[0].remove(linknya[0]);
        linknya[0].remove(linknya[0]);

        let link1= document.createElement("link");
        link1.setAttribute('rel', 'stylesheet');
        link1.setAttribute('href', 'style'+stylenyaa+'.css');

        let link2= document.createElement("link");
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'content'+stylenyaa+'.css');

        // head.appendChild(link1);
        // head.appendChild(link2);

        head.insertBefore(link1, title);
        head.insertBefore(link2, title);

        setTimeout(function(){ 
            body.classList.toggle("hilang");
        }, 1005);
    }
};
cek();
// warna
stng.addEventListener('click', function(){
    wrna.classList.toggle('hilang');
})

for(let i=0; i<pilwarna.length; i++){
    pilwarna[i].addEventListener('click', function(){
        // linknya[0].remove(linknya[0]);
        // linknya[0].remove(linknya[0]);

        let link1= document.createElement("link");
        link1.setAttribute('rel', 'stylesheet');
        link1.setAttribute('href', 'style'+i+'.css');

        let link2= document.createElement("link");
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'content'+i+'.css');

        // head.appendChild(link1);
        // head.appendChild(link2);

        head.insertBefore(link1, title);
        head.insertBefore(link2, title);

        setTimeout(function(){ 
            linknya[0].remove(linknya[0]);
            linknya[0].remove(linknya[0]);
        }, 1010);

        localStorage.setItem("style",i);
    })

}

// saat tombol icon diklik lakukan 
// let nav = document.querySelector(".icon");
// nav.addEventListener('click', function () {
//     let navigasi = document.getElementById("nav");
//     let konten = document.getElementById("konten");

//     if (navigasi.className.indexOf('navigasi-hilang') == -1) {
//         navigasi.className += " navigasi-hilang";
//         konten.className = konten.className.replace("konten", "konten-penuh");
//     } else {
//         navigasi.className = navigasi.className.replace("navigasi-hilang", "");
//         konten.className = konten.className.replace("konten-penuh", "konten");
//     }
// })

// subbab
//let materi = document.querySelectorAll('.navigasi li .nihhh');
//let submateri = document.querySelectorAll(' .sub-bagian');
//for (let i = 0; i < materi.length; i++) {
 //   materi[i].addEventListener('click', function () {
//        submateri[i].classList.toggle('hilang');
 //   });
//}

// petunjuk
//let petunjunya = document.querySelectorAll('.petunjuk');
//let isinya = document.querySelectorAll('.isinya');
//for (let i = 0; i < petunjunya.length; i++) {
 //   petunjunya[i].addEventListener('click', function () {
 //       if (isinya[i].className.indexOf('hilang') == -1) {
 //           isinya[i].className += ' hilang';
  //      } else {
  //          isinya[i].className = isinya[i].className.replace('hilang', '');
 //       }
 //   })
//}

// function agar saat di enter tidak dijalankan 
// jwb1nya.addEventListener('keypress', function (e) {
//     if (e.keyCode == 13) {
//         e.preventDefault();
//         return false;
//     }
// });


//let cekdulu = document.querySelectorAll('ul a');

//for (let i = 0; i < cekdulu.length; i++) {
 //   cekdulu[i].addEventListener('click', function (e) {
  //      e.preventDefault(e);
        // console.log(cekdulu[i]);
        // let tanya = confirm("Yakin Ingin Meninggalkan Halaman");

        // if (tanya) {
        //     window.location = cekdulu[i].href;
        // } else {

        // }


//    });
//}

window.addEventListener('kyup', function (e) {
    if (e.keyCode == 8) {
        e.preventDefault();
    }
});


let home_klik = document.querySelector('.home a');
console.log(home_klik);
home_klik.addEventListener('click', function (e) {
    e.preventDefault(e);
    let tanya = confirm("Yakin Ingin Meninggalkan Halaman");
    if (tanya) {
        window.location = home_klik.href;
    } else {

    }
})


// ulangweb();
// var ulang;
// ulang1();
// localStorage.setItem("cek", 1);



// function ulangweb() {
//     if (localStorage.getItem("cek1") == '11') {

//         localStorage.removeItem("cek1");
//         localStorage.removeItem("cek2");

//     } else {
//         ulanggg = setTimeout(ulang1, 2000);
//     }
// }

// function ulang1() {

//     if (localStorage.getItem("cek2") == '111') {
//         console.log('3');
//     } else if (localStorage.getItem("cek1") == '11') {
//         let ulang = localStorage.getItem("cek1");
//         ulang = ulang + 1;
//         localStorage.setItem("cek2", ulang);
//         let tmp = document.querySelector('.full');
//         tmp.classList.toggle('hilang');
//     } else if (localStorage.getItem("cek") == '1') {
//         let ulang = localStorage.getItem("cek");
//         ulang = ulang + 1;
//         localStorage.setItem("cek1", ulang);
//         let tmp = document.querySelector('.full');
//         tmp.classList.toggle('hilang');
//     }
//   // window.location = window.location;
// }