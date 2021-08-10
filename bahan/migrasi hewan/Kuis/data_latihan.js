// menghubungkan ke database firebase


	// Your web app's Firebase configuration
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
  


let selanjutnya = document.querySelector('.lanjut');
let datadiri = document.querySelector('.data_diri');
namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let sekolahfix = '';
let kelasfix = '';

selanjutnya.addEventListener('click', function () {

    let cek = 0;
    if (namanya.value == "") {
        if (namanya.className.indexOf('tt_salah') == -1) {
            namanya.className += ' tt_salah';
        }
    } else {
        namanya.className = namanya.className.replace('tt_salah', '');
        cek += 1;

    }

    if (kelasnya.value == "0") {
        if (kelasnya.className.indexOf('tt_salah') == -1) {
            kelasnya.className += ' tt_salah';
        }
    } else {
        kelasnya.className = kelasnya.className.replace('tt_salah', '');
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

    if (sekolah.value == "0") {
        if (sekolah.className.indexOf('tt_salah') == -1) {
            sekolah.className += ' tt_salah';
        }
    } else {
        sekolah.className = sekolah.className.replace('tt_salah', '');

        if (sekolah.value == "1") {
            sekolahfix = "SMP Negeri 2 Banjarmasin";
        } 
        cek += 1;
    }

    // console.log(sekolahfix);

    if (cek != 3) {
        alert("lengkapi dulu data dari anda");
    } else if (cek == 3) {
        datadiri.className += ' hilang';
        document.getElementById('data').className += ' hilang';
        document.getElementById('kiri').className = document.getElementById('kiri').className.replace('hilang', '');
        document.getElementById('kanan').className = document.getElementById('kanan').className.replace('hilang', '');

    }
    
    var menit = 60 * 30,
    display = document.querySelector('#time');
    startTimer(menit, display);


    MathJax.typeset();
});
        // timer pada soal
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = "0";
                    waktuhabis.style.display="";
                }
            }, 1000);
        }


window.onload = function () {
    namanya.value = "";
    kelasnya.value = value = "0";
    sekolah.value = value = "0";


    document.getElementById('kiri').className += ' hilang';
    document.getElementById('kanan').className += ' hilang';

    readlah();

    MathJax.typeset();
}





// -----------------------------------------------------------------------------------------
// mengambil data dan menampilkanya

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {


    cek = [];
    jwbs = [];
    hasilakhir = 0;
    kkm=70;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * data.length) + 0;
            cek.push(angka);
        }
        // membuang angka yang sama
        cek = Array.from(new Set(cek));
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let opt = data[nilai]["soal" + nilai]["opt"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3, opt];

            jwbs.push(bnr);
            console.log(soaldata);


            // ---------------------------------
            
            // rangkai konten soal;
            let bg_pertanyaan = document.createElement('div');
            bg_pertanyaan.setAttribute('class', 'bg_pertanyaan');
           
            if (i != 0) {
                bg_pertanyaan.className += " hilang";
               
            }

            let no = document.createElement('div');
            no.setAttribute('class', 'no');

            let soal = document.createElement('p');
            let text_soal = document.createTextNode('Soal ke ');

            let span = document.createElement('span');
            let text_span = document.createTextNode(i + 1);
            
            bg_pertanyaan.appendChild(no);
            no.appendChild(soal);
            soal.appendChild(text_soal);
            soal.appendChild(span);
            span.appendChild(text_span);
            
            

            // ---------------------------------

            let inti_pertanyaan = document.createElement('div');
            inti_pertanyaan.setAttribute('class', 'inti_pertanyaan');

            let pertanyaannya = document.createElement('div');
            pertanyaannya.setAttribute('class', 'pertanyaannya');
            

            let new_p = document.createElement('p');
            let text_p = document.createTextNode(soaldata);

   

  


            let soall = document.createElement('div');
            soall.setAttribute('class', 'soall');

//=============menambahkan class

            if(nilai==2){
                let soal3 = document.createElement('div');
                soal3.setAttribute('id', 'soal3');

                inti_pertanyaan.appendChild(soal3);
            }
            if(nilai==7){
                let soalt = document.createElement('div');
                soalt.setAttribute('id', 'soalt');

                inti_pertanyaan.appendChild(soalt);
            }
            new_p.appendChild(text_p);
            pertanyaannya.appendChild(new_p);
            
            inti_pertanyaan.appendChild(pertanyaannya);
            bg_pertanyaan.appendChild(inti_pertanyaan);
//batas ---------------------------------

          let batas = document.createElement('div');
          batas.setAttribute('class', 'batas');

          inti_pertanyaan.appendChild(batas);
          bg_pertanyaan.appendChild(inti_pertanyaan);

          // ---------------------------------
            for (let ii = 0; ii < 4; ii++) {
                let bg_pilihan = document.createElement('label');
                bg_pilihan.setAttribute('class', 'bg_pilihan');

                let input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'radio' + i);
                if (ii == 0) {
                    input.setAttribute('value', 'a');
                } else if (ii == 1) {
                    input.setAttribute('value', 'b');
                } else if (ii == 2) {
                    input.setAttribute('value', 'c');
                } else {
                    input.setAttribute('value', 'd');
                }

                let textnya = document.createElement('span');
                textnya.setAttribute('class', 'textnya');

                let nav_pilihan = document.createElement('span');
                nav_pilihan.setAttribute('class', 'nav_pilihan');

                let new_p1 = document.createElement('p');
                let text_p1 = document.createTextNode(jwb[ii]);

                new_p1.appendChild(text_p1);
                textnya.appendChild(nav_pilihan);
                textnya.appendChild(new_p1);
                bg_pilihan.appendChild(input);
                bg_pilihan.appendChild(textnya);
                soall.appendChild(bg_pilihan);


            }

            // ---------------------------------

            inti_pertanyaan.appendChild(soall);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_sebelum = document.createElement('div');
            nav_sebelum.setAttribute('class', 'nav_sebelum');
            if (i == 0) {
                nav_sebelum.className += " disable";
            }

            let new_p2 = document.createElement('p');
            let text_p2 = document.createTextNode('Sebelumnya');

            new_p2.appendChild(text_p2);
            nav_sebelum.appendChild(new_p2);
            inti_pertanyaan.appendChild(nav_sebelum);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            // ---------------------------------

            let nav_selanjut = document.createElement('div');
            nav_selanjut.setAttribute('class', 'nav_selanjut');
            if (i == (cek.length - 1)) {
                nav_selanjut.className += " disable";
            }

            let new_p4 = document.createElement('p');
            let text_p4 = document.createTextNode('Selanjutnya');

            new_p4.appendChild(text_p4);
            nav_selanjut.appendChild(new_p4);
            inti_pertanyaan.appendChild(nav_selanjut);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let div_jawaban = document.createElement('div');
            div_jawaban.setAttribute('class', 'pertanyaannya hilang');


            let new_pp = document.createElement('p');
            let text_pp = document.createTextNode("Jawaban  = " + opt);

            new_pp.appendChild(text_pp);
            div_jawaban.appendChild(new_pp);

            inti_pertanyaan.appendChild(div_jawaban);
            // ---------------------------------

            let clear = document.createElement('div');
            clear.setAttribute('class', 'clear');
            inti_pertanyaan.appendChild(clear);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // letakkan di 
            const bd = document.getElementById('kiri');
            bd.appendChild(bg_pertanyaan);

           
        }

        // akhir if

// memasukan gambar kesoal=============================//
// memasukan gambar kesoal=============================//
        var gambar= new Image(300);
        gambar.src='gambar/1.png';
         x=document.getElementById("soal3");
        x.appendChild(gambar);

        var gambart= new Image(300);
        gambart.src='gambar/2.png';
         y=document.getElementById("soalt");
        y.appendChild(gambart);
    
        // perintah tombol selanjutnya
        // ---------------------------------

        let bg_pertanyaannya = document.querySelectorAll('.bg_pertanyaan');
        let tmbl_selanjutnya = document.querySelectorAll('.nav_selanjut');
        for (let i = 0; i < tmbl_selanjutnya.length - 1; i++) {
            tmbl_selanjutnya[i].addEventListener('click', function () {

                let bgnya = tmbl_selanjutnya[i].parentElement.parentElement;
                // menghilangkan bg_sekarang
                bgnya.className += " hilang";
                // menampilkan bg_pertanyaan selanjutnya
                bg_pertanyaannya[i + 1].className = bg_pertanyaannya[i + 1].className.replace("hilang", "");
               
              
            });

        }

        // ---------------------------------
        // perintah tombol kembali
        let tmbl_sebelumnya = document.querySelectorAll('.nav_sebelum');
        for (let i = 0; i < tmbl_sebelumnya.length; i++) {
            tmbl_sebelumnya[i].addEventListener('click', function () {
                if (i != 0) {
                    let bgnya = tmbl_sebelumnya[i].parentElement.parentElement;
                    bgnya.className += " hilang";
                    // menampilkan bg_pertanyaan selanjutnya
                    bg_pertanyaannya[i - 1].className = bg_pertanyaannya[i - 1].className.replace("hilang", "");
                }
            });
        }

        // ---------------------------------
        // tangkap soall pilihan yang dklik dan beri warna di nav soal
        let soallnya = document.querySelectorAll('.soall');
        let soal_navnya = document.querySelectorAll('.soal_nav');

        for (let i = 0; i < soallnya.length; i++) {
            soallnya[i].addEventListener('click', function () {

                let pilihannya = document.querySelectorAll('.bg_pilihan input');
                for (let j = 0; j < pilihannya.length; j++) {
                    pilihannya[j].addEventListener('click', function () {
                        soal_navnya[i].className = soal_navnya[i].className.replace("belum", " sudah");
                    });
                }


            });
        }



        // ---------------------------------
        // cek jawaban
        let selesai = document.querySelector('.selesai');
        let pil_user = [];
        new_jwb_urut = [];
        new_jwb_urut_no = [];

        selesai.addEventListener('click', function () {


            let sarat = 0;

            for (let t = 0; t < jwbs.length; t++) {
                if ((soal_navnya[t].className.indexOf('sudah') == 10)) {
                    sarat = sarat + 1;
                }
            }

            if (sarat == jwbs.length) {
                // array kunci
                hasilakhir = 0;
                benarr = 0;
                salahh = jwbs.length;

                let pils_soal = document.querySelectorAll('input');


                for (let i = 0; i < jwbs.length; i++) {
                    for (let j = 0; j < pils_soal.length; j++) {

                        if (j == 0) {

                        } else {
                            // menonaktifkan pilihan
                            // pils_soal[j].setAttribute('disabled', 'true');

                            if (pils_soal[j].attributes.name.nodeValue == 'radio' + i) {
                                if (pils_soal[j].checked == true) {
                                    // cek jawaban dengan kunci
                                    console.log(pils_soal[j].value);
                                    console.log(jwbs[i]);
                                    pil_user.push(pils_soal[j].value);
                                    if (pils_soal[j].value == jwbs[i]) {
                                        hasilakhir = hasilakhir + 10;
                                        benarr = benarr + 1;
                                    } else {
                                        hasilakhir = hasilakhir;
                                    }
                                }
                            }
                        }


                    }

                }

                for (let i = 0; i < cek.length; i++) {
                    for (let j = 0; j < cek.length; j++) {
                        if (i == cek[j]) {
                            new_jwb_urut.push(pil_user[j]);
                            new_jwb_urut_no.push(cek[j]);
                        }
                    }
                }
                console.log("jwb_user_urut_no :" + new_jwb_urut_no);
                console.log("jwb_user_urut :" + new_jwb_urut);
                // simpan kedatabase----------
                console.log(namanya.value);
                console.log(sekolahfix);
                console.log(kelasfix);
                console.log(hasilakhir);
                let waktunya = waktu();
                let harinya = hari();

                createTask(sekolahfix, namanya.value.toUpperCase(), kelasfix, hasilakhir, waktunya, harinya, new_jwb_urut);

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

                let hasillinput = document.querySelector('.hasill');
                hasillinput.innerText = hasilakhir;

                let kirihilang = document.querySelector('.kiri');
                kirihilang.className += ' hilang';

                let kananhilang = document.querySelector('.kanan');
                kananhilang.className += ' hilang';

                let datanya = document.querySelector('.dataaa');
                datanya.className = datanya.className.replace('hilang', '');


                // ---------------------------------
                //tampilkan semua soal dan jawaban benar

                // let hilang_bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
                // let tampil_pertanyaann = document.querySelectorAll('.inti_pertanyaan .pertanyaannya');
                // for (let k = 0; k < hilang_bgsoalnya.length; k++) {
                //     if (hilang_bgsoalnya[k].className.indexOf('hilang') == -1) {

                //     } else {
                //         hilang_bgsoalnya[k].className = hilang_bgsoalnya[k].className.replace("hilang", " ");
                //     }
                // }
                // for (let k = 0; k < tampil_pertanyaann.length; k++) {
                //     //tampilkan jawaban

                //     if (tampil_pertanyaann[k].className.indexOf('hilang') == -1) {} else {
                //         tampil_pertanyaann[k].className = tampil_pertanyaann[k].className.replace("hilang", " ");
                //     }
                // }

                //
            // menampilkan keterangan lulus atau gagal
                if(hasilakhir >= kkm){
                    lulus.style.display="";
                }else{
                    gagal.style.display="";
                }
            } else {
                alert('Masih Ada Soal Yang Belum Dijawab, Periksa Kembali . . . !');
            }



        });


        // ---------------------------------
        // nav_soal diklik
        let klik_nav_soal = document.querySelectorAll('.soal_nav');
        for (let l = 0; l < klik_nav_soal.length; l++) {
            klik_nav_soal[l].addEventListener('click', function () {
                let pindah_bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
                for (let k = 0; k < pindah_bgsoalnya.length; k++) {

                    if (k == l) {
                        pindah_bgsoalnya[k].className = pindah_bgsoalnya[k].className.replace(" hilang", " ");
                    } else {
                        if (pindah_bgsoalnya[k].className.indexOf('hilang') == -1) {
                            pindah_bgsoalnya[k].className += ' hilang';
                        }
                    }
                }
            });
        }




    }

}

dat.open('GET', 'data.json', true);
dat.send();



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
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}





function createTask(sekolah, nama, kelas, nilai, waktunya, hari, jwb) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        waktu: waktunya,
        hari: hari,
        jawabannya: jwb
    }

    let db = firebase.database().ref("kuis1/" + counter);
    db.set(task);

}


MathJax.typeset();