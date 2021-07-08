document.querySelector('#gen-1').innerHTML="Generasión 1 Pokimon";

//let firstGen = document.querySelector('main>div:nth-child(6)').querySelectorAll('.infocard')
let firstGen = document.querySelector('main>div:nth-child(6)').querySelectorAll('.infocard')
    for (let i=0;i<firstGen.length;i++)
    {
        //console.log(firstGen[i])
        firstGen[i].style.backgroundColor="red";
    }



console.log(document.URL);

console.log(document.domain);

console.log(document.querySelectorAll('img'));

let todasLasImagenes = document.querySelectorAll('img');

    for (let i = 0; i < todasLasImagenes.length; i++) {
        
        todasLasImagenes[i].src= "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
        
    }
