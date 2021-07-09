// menguhubungkan ke firebase
var firebaseConfig = {
    apiKey: "AIzaSyBP2OlbvugAiBYYoIVLPnmBTJb86yKinx4",
    authDomain: "hasilnya-7dbc4.firebaseapp.com",
    databaseURL: "https://hasilnya-7dbc4.firebaseio.com",
    projectId: "hasilnya-7dbc4",
    storageBucket: "hasilnya-7dbc4.appspot.com",
    messagingSenderId: "35969158548",
    appId: "1:35969158548:web:e4086ee61bd9807a839381"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.load = function () {


}

function readlah() {
    var task = firebase.database().ref("kuis4/");
    let tmp = document.querySelector('.disini');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    let kelasfix = '';
    let sekolahfix = '';

    if (kelasnya.value == "1") {
        kelasfix = "7A";
    } else if (kelasnya.value == "2") {
        kelasfix = "7B";
    } else if (kelasnya.value == "3") {
        kelasfix = "7C";
    } else if (kelasnya.value == "4") {
        kelasfix = "7D";
    } else if (kelasnya.value == "5") {
        kelasfix = "7E";
    } else if (kelasnya.value == "6") {
        kelasfix = "7F";
    } else if (kelasnya.value == "7") {
        kelasfix = "7G";
    }

    if (sekolah.value == "1") {
        sekolahfix = "SMP Negeri 2 Banjarmasin";
    } else if (sekolah.value == "2") {
        sekolahfix = "SMP Negeri 9 Banjarmasin";
    }

    if ((sekolahfix != '') && (kelasfix != '')) {
        task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else if (sekolahfix != '') {
        task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
}



// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})