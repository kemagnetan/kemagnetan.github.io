let stng = document.querySelector('.icon1');
let wrna = document.querySelector('.warna');
let pilwarna= document.querySelectorAll('.warnanya');
let linknya =document.getElementsByTagName("link");
let head= document.querySelector("head");
let title =document.querySelector("title");
let body= document.querySelector("body");



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



window.addEventListener('kyup', function (e) {
    if (e.keyCode == 8) {
        e.preventDefault();
    }
});

