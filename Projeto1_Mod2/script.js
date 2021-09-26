var contador = 0;
var fotos =["feliz.png","assustado.png", "pensativo.png", 'entendendo.png'];

var humor=["Feliz", "Assustado", "Pensativo","Entendendo o 2° módulo"];

var altera = ['feliz','assustado', 'pensativo', 'entendendo'];

function trocarIMG(){
    if(contador == fotos.length){
        contador=0;
    }
    document.getElementById('img1').src=fotos[contador];
    document.getElementById('humor').innerHTML= humor[contador];
    document.getElementById('img1').alt= altera[contador];
    contador++;
    
}
    