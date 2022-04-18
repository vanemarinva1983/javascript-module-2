/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6


    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const paragraph = document.querySelectorAll("p")
console.log(paragraph);

const div = document.querySelector("div")
console.log(div);

const jumbotron = document.querySelector("#jumbotron-text")
console.log(jumbotron);

const paragraphPrimary = document.querySelectorAll(".primary-content p")
console.log(paragraphPrimary);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const button = document.querySelector("#alertBtn");
function alertBtn() {
    alert("Thanks for visiting Bikes for Refugees!")
}
button.addEventListener("click", alertBtn)

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
/*const buttonBackground = document.querySelector("#bgrChangeBtn");
function bgrChangeBtn() {
    document.querySelector("body").style.backgroundColor = "gray"
}
buttonBackground.addEventListener("click", bgrChangeBtn)
/*
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const buttonAddSomeText = document.querySelector("#addTextBtn");
const learMore = document.querySelector("#mainArticles");
function addTextBtn() {
    learMore.innerHTML=learMore.innerHTML+"Bicicletas para todos los gustos" 
}
buttonAddSomeText.addEventListener("click", addTextBtn)


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinks = document.querySelector("#largerLinksBtn");
const allLinks = document.querySelectorAll("a");
function increaseLinks () { 
    allLinks.forEach((link)=>{link.style.fontSize="2em"})
}
largerLinks.addEventListener("click", increaseLinks )

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const add = document.querySelector("#addArticleBtn");
const addInput = document.querySelector("input.form-control.addArticle");
function addText() {
    learMore.innerHTML=learMore.innerHTML+"<article><p>"+addInput.value+"</p></article>"
    addInput.value=""
}
add.addEventListener("click", addText)
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const colores = ["yellow", "blue", "red", "green", "purple"];
    let index = 0;
console.log(colores[index]);

const buttonBackground = document.querySelector("#bgrChangeBtn");
function bgrChangeBtn() {
    document.querySelector("body").style.backgroundColor = colores[index]
    index = index+1
    if (index === 5){index = 0}
}
buttonBackground.addEventListener("click", bgrChangeBtn)


