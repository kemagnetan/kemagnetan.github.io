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

window.onload = function () {


}

function mencari() {

    let tmp = document.querySelector('.disini');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('kelas');
    kuis = document.getElementById('kuis');
    let kelasfix = '';

    nilaikuis=kuis.value;
    var task = firebase.database().ref(nilaikuis);
    console.log(task);
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
    }

    if (kelasfix != '') {
        task.on("child_added", function (data) {
            var taskvalue = data.val();


            if (kelasfix == taskvalue.kelas) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                            <td class="hps" onclick ="deletetask(${taskvalue.id})"><button type="button" class="btn btn-danger">Hapus</button></td>
                        </tr>`;
            }
        });

    }else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelas = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('nilaikuis');
    kelas.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}

//haups data

function deletetask(id) {
    var yakin = confirm("Apakah kamu yakin ingin menghapus data ini ?");
    if (yakin) {
        var task = firebase.database().ref(nilaikuis+'/' + id);
        task.remove();
        mencari();
        alert("Data Berhasil dihapus");
    } else {

    }
}

//download table
function exportTableToExcel(tabel, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tabel = document.getElementById(tabel);
    var tableHTML = tabel.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}