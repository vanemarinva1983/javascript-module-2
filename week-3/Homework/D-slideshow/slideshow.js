// Write your code here
const imagenesGato = ["https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdhdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2F0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2F0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2F0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2F0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2F0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1559624989-7b9303bd9792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"]

console.log(imagenesGato);
const autoBackBtn = document.querySelector('#autoBackBtn')
const anteriorBtn = document.querySelector('#anteriorBtn')
const stopBtn = document.querySelector('#stopBtn')
const siguienteBtn = document.querySelector('#siguienteBtn')
const autoNextBtn = document.querySelector('#autoNextBtn')
const imagenesEl = document.querySelector('#imgGato')
let index = 0
let bucleAdelante 
let bucleAtras

imagenesEl.src= imagenesGato[index]

siguienteBtn.addEventListener('click',() => siguiente())
anteriorBtn.addEventListener('click',() => anterior())
autoNextBtn.addEventListener('click',() => autoNext())
autoBackBtn.addEventListener('click',() => autoBack())
stopBtn.addEventListener('click',() => Stop())

function siguiente() {
    if (index == imagenesGato.length -1) {index = -1 ;
    }
    index++;
    imagenesEl.src = imagenesGato [index];
    console.log(index, imagenesGato[index]);
};

function autoNext(){
    clearInterval(bucleAtras)
     bucleAdelante = setInterval("siguiente()",1000);
};

function autoBack(){
    clearInterval(bucleAdelante)
     bucleAtras = setInterval("anterior()",1000);
};

function Stop(){
    if (bucleAdelante != undefined) {
        clearInterval(bucleAdelante)
    }
    if (bucleAtras != undefined) {
        clearInterval(bucleAtras)
    }
};

function anterior (){
    if(index < 1){
        index = imagenesGato.length 
    }
    index --
    imagenesEl.src = imagenesGato[index]
    console.log(index, imagenesGato[index]);
};