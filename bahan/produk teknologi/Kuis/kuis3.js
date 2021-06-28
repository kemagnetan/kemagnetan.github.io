function initializeApp(){

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
  
  }

//memasukan data diri
function mulai() {
    nama = document.getElementById("nama").value ;
    sekolah = document.getElementById("sekolah").value ;
    kelas = document.getElementById("kelas").value ;
    datadiri = document.getElementById("datadiri") ;
    console.log(sekolah);
    console.log(nama);
    console.log(kelas);

    cek=0;
    if (nama!=""){
        cek++;
    }
    if (sekolah!=""){
        cek++;
    }
    if (kelas!=""){
        cek++;
    }

    if(cek != 3){
        alert("Data diri anda belum lengkap. lengkapi terlebih dahulu");
    }
    else{
        datadiri.style.display="none";
        badan_soal.style.display="";
		navigasi_soal.style.display="";
    }
}

//menampilkan soal dari json array
//menampilkan soal dari json array

var SoalKe = 0;
var Skor = 0;
var totSoal =PertanyaanArray.length;
var simpan_jawaban=[0,0,0,0,0,0,0,0,0,0];
var soal_terjawab=[0,0,0,0,0,0,0,0,0,0];
var pilihan=[0,0,0,0,0,0,0,0,0,0];
var tot_soal_terjawab=0;
var cek;
var cek_jwb;



var pertanyaanKe = document.getElementById('pertanyaan');

//menampilkan soal dengan button
function soal1_sow(){
	SoalKe=0;
	loadQuestion(0);
	badanSoal.style.display = '';
}
function soal2_sow(){ SoalKe=1;loadQuestion(1);badanSoal.style.display = '';}
function soal3_sow(){ SoalKe=2;loadQuestion(2);badanSoal.style.display = '';}
function soal4_sow(){ SoalKe=3;loadQuestion(3);badanSoal.style.display = '';}
function soal5_sow(){ SoalKe=4;loadQuestion(4);badanSoal.style.display = '';}
function soal6_sow(){ SoalKe=5;loadQuestion(5);badanSoal.style.display = '';}
function soal7_sow(){ SoalKe=6;loadQuestion(6);badanSoal.style.display = '';}
function soal8_sow(){ SoalKe=7;loadQuestion(7);badanSoal.style.display = '';}
function soal9_sow(){ SoalKe=8;loadQuestion(8);badanSoal.style.display = '';}
function soal10_sow(){ SoalKe=9;loadQuestion(9);badanSoal.style.display = '';}

function Cek2(){
	cek_jwb=true;
	btn_cek.style.display="none";
	badanSoal.style.display = '';
	btn_selanjutnya.style.display='';
	hasil.style.display='none';
	SoalKe=0;
	loadQuestion(0)

	//menampilkan button navigasi ketika tombol cek ditekan
	tombol1.style.display="";tombol2.style.display="";tombol3.style.display="";tombol4.style.display="";tombol5.style.display="";
	tombol6.style.display="";tombol7.style.display="";tombol8.style.display="";tombol9.style.display="";tombol10.style.display="";

}
//fungsi utama untuk menampilkan soal
function loadQuestion (IndexSoal) {
	var q = PertanyaanArray[IndexSoal];
	pertanyaanKe.textContent = (IndexSoal + 1) + '. ' + q.soal;
	opt1.textContent = q.pilihan1;
	opt2.textContent = q.pilihan2;
	opt3.textContent = q.pilihan3;
	opt4.textContent = q.pilihan4;
	
	//soal yang punya list dan gambar
	if(PertanyaanArray[SoalKe]==PertanyaanArray[1]){
		soal2.style.display = '';
	}else{
		soal2.style.display = 'none';
	}
	if(PertanyaanArray[SoalKe]==PertanyaanArray[3]){
		soal4.style.display = '';
	}else{
		soal4.style.display = 'none';
	}
	if(PertanyaanArray[SoalKe]==PertanyaanArray[4]){
		soal5.style.display = '';
	}else{
		soal5.style.display = 'none';
	}
	if(PertanyaanArray[SoalKe]==PertanyaanArray[8]){
		soal9.style.display = '';
	}else{
		soal9.style.display = 'none';
	}
	
	//menganti warna bacground pilihan yang telah dipilih
	if (pilihan[IndexSoal]==""){
		pilihan1.checked = false; pilihan2.checked = false; pilihan3.checked = false; pilihan4.checked = false;
		bg1.style.background='';
		bg1.style.color='';
		bg2.style.background='';
		bg2.style.color='';
		bg3.style.background='';
		bg3.style.color='';
		bg4.style.background='';
		bg4.style.color='';
	}
	if (pilihan[IndexSoal]==1){
		pilihan1.checked = true;
		bg1.style.background='brown';
		bg1.style.color='white';

		bg2.style.background='';
		bg2.style.color='';
		bg3.style.background='';
		bg3.style.color='';
		bg4.style.background='';
		bg4.style.color='';
	}
	if (pilihan[IndexSoal]==2){
		pilihan2.checked = true;
		bg2.style.background='brown';
		bg2.style.color='white';

		bg1.style.background='';
		bg1.style.color='';
		bg3.style.background='';
		bg3.style.color='';
		bg4.style.background='';
		bg4.style.color='';
	}
	if (pilihan[IndexSoal]==3){
		pilihan3.checked = true;
		bg3.style.background='brown';
		bg3.style.color='white';

		bg2.style.background='';
		bg2.style.color='';
		bg1.style.background='';
		bg1.style.color='';
		bg4.style.background='';
		bg4.style.color='';
	}
	if (pilihan[IndexSoal]==4){
		pilihan4.checked = true;
		bg4.style.background='brown';
		bg4.style.color='white';

		bg2.style.background='';
		bg2.style.color='';
		bg3.style.background='';
		bg3.style.color='';
		bg1.style.background='';
		bg1.style.color='';
	}

	//mengganti radio button yang jawabannya benar ketika mengecek jawaban
	if ( cek_jwb==true){
		if(IndexSoal==0){
			bg4.style.background='green';
			bg4.style.color='white';
		}
		if(IndexSoal==1){
			bg3.style.background='green';
			bg3.style.color='white';
		}
		if(IndexSoal==2){
			bg1.style.background='green';
			bg1.style.color='white';
		}
		if(IndexSoal==3){
			bg3.style.background='green';
			bg3.style.color='white';
		}
		if(IndexSoal==4){
			bg4.style.background='green';
			bg4.style.color='white';
		}
		if(IndexSoal==5){
			bg4.style.background='green';
			bg4.style.color='white';
		}
		if(IndexSoal==6){
			bg2.style.background='green';
			bg2.style.color='white';
		}
		if(IndexSoal==7){
			bg3.style.background='green';
			bg3.style.color='white';
		}
		if(IndexSoal==8){
			bg2.style.background='green';
			bg2.style.color='white';
		}
		if(IndexSoal==9){
			bg2.style.background='green';
			bg2.style.color='white';
		}
	}
	
};

//simpan jawaban
//simpan jawaban
//simpan jawaban
//simpan jawaban

function simpan(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	//mengecek apakah sudah diisi
		if(selectedOption){
	//merubah warna tombol ketika soal sudah dijawab
		let tombol=[tombol1,tombol2,tombol3,tombol4,tombol5,tombol6,tombol7,tombol8,tombol9,tombol10];
		tombol[SoalKe].style.background="black";
		tombol[SoalKe].style.color="white";
	}else{
		alert('Isi jawaban terlebih dahulu')
	}
	//menyimpan nilai jawaban
	jawaban = selectedOption.value;
	if(PertanyaanArray[SoalKe].jawaban == jawaban){
		simpan_jawaban[SoalKe]=+10;
	}else{
		simpan_jawaban[SoalKe]=0;
	}

	soal_terjawab[SoalKe]=1;//menyimpan jumlah soal yang terjawab untuk menampilkan selesai
	console.log(simpan_jawaban);
	console.log(soal_terjawab);
	console.log(jawaban);

	//menghilangkan pada id btn_selanjutnya
			//menghitung soal yang sudah terjawab
			var nilai_soal_terjawab=0;
			for (var x=0;x<soal_terjawab.length;x++){	
				nilai_soal_terjawab=nilai_soal_terjawab+soal_terjawab[x];
			}
			console.log(nilai_soal_terjawab);
			//bisa klik Selesai
			if(nilai_soal_terjawab ==10){
				btn_selanjutnya.style.display="none";
				btn_selesai.style.display="";
				btn_simpan.style.display="none";

				tot_soal_terjawab=nilai_soal_terjawab;

			}
	//menyimpan pilihan yang di jawab
	pilihan[SoalKe]=jawaban;
	
}

//menampilkan soal berikutnya
//menampilkan soal berikutnya
//menampilkan soal berikutnya
//menampilkan soal berikutnya

function SoalNext () {

	SoalKe=SoalKe+1;
	loadQuestion(SoalKe);
	console.log(Skor);
	
}
function selesaii(){

		//menghitung jumlah skor
		if(tot_soal_terjawab == totSoal){
		
			for (var i=0;i<simpan_jawaban.length;i++){
				Skor=Skor+simpan_jawaban[i];
			}
			
			badanSoal.style.display = 'none';
			btn_selesai.style.display = 'none';
			hasil.style.display = '';
			mat_selanjutnya.style.display = '';
			btn_simpan.style.display = 'none';
			btn_cek.style.display = '';
			hasil.textContent = 'SKOR KAMU: ' + Skor; //menampilkan skor akhir
		
			//menghilangkan button navigasi ketika tombol cek ditekan
			tombol1.style.display="none";tombol2.style.display="none";tombol3.style.display="none";tombol4.style.display="none";tombol5.style.display="none";
			tombol6.style.display="none";tombol7.style.display="none";tombol8.style.display="none";tombol9.style.display="none";tombol10.style.display="none";
				
		}
		 // simpan kedatabase----------;
		 let waktunya = waktu();
		 let harinya = hari();

		 createTask(sekolah, nama, kelas, Skor, waktunya, harinya);
}


loadQuestion(SoalKe);


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




function createTask(sekolah, nama, kelas, Skor, waktunya, hari) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        Skor: Skor,
        waktu: waktunya,
        hari: hari
    }

    let db = firebase.database().ref("kuis3/" + counter);
    db.set(task);

}