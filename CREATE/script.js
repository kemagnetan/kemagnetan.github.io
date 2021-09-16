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

     
        function tambah(){
            let we = firebase.database().ref('evaluasi');
             
            console.log(we);
        }