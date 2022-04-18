//parte 1
/*
- When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`
  */

  const blueButton = document.querySelector("#blueBtn")

  const jumbotronBox = document.querySelector(".jumbotron")

  const donateButton = document.querySelector(".btn.btn-primary.btn-lrg")
  
  const volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg")

  function changeBlueBackground() {
            jumbotronBox.style.backgroundColor = "#588fbd"
            donateButton.style.backgroundColor = "#ffa500"
            volunteerButton.style.backgroundColor = "black"
            volunteerButton.style.color = "white"
  }

  blueButton.addEventListener("click", changeBlueBackground)

  /*
  - When clicking **orange** it should change:

  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`
  */

  const orangeButton = document.querySelector("#orangeBtn")

  const jumbotronBoxOrange = document.querySelector(".jumbotron")

  const donateButtonOrange = document.querySelector(".btn.btn-primary.btn-lrg")
  
  const volunteerButtonOrange = document.querySelector(".btn.btn-secondary.btn-lrg")

  function changeOrangeBackground() {
            jumbotronBoxOrange.style.backgroundColor = "#f0ad4e"
            donateButtonOrange.style.backgroundColor = "#5751fd"
            volunteerButtonOrange.style.backgroundColor = "#31b0d5"
            volunteerButtonOrange.style.color = "white"
  }

  orangeButton.addEventListener("click", changeOrangeBackground)

  /*
  - When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`
  */

  const greenButton = document.querySelector("#greenBtn")

  const jumbotronBoxGreen = document.querySelector(".jumbotron")

  const donateButtoGreen = document.querySelector(".btn.btn-primary.btn-lrg")
  
  const volunteerButtonGreen = document.querySelector(".btn.btn-secondary.btn-lrg")

  function changeGreenBackground() {
            jumbotronBox.style.backgroundColor = "#87ca8a"
            donateButton.style.backgroundColor = "black"
            volunteerButton.style.backgroundColor = "#8c9c08"
           
  }

  greenButton.addEventListener("click", changeGreenBackground)

  //parte 2

  
  const email = document.querySelector("#exampleInputemail1")
  const name = document.querySelector("#example-text-input")
  const description = document.querySelector("#exampleTextarea")
  const formulario = document.querySelector("form")

  const verificarInputs = (input) => input.value.length == 0

  formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!verificarInputs(email) && !verificarInputs(name) && !verificarInputs(description) && email.value.includes("@")){
      const inputs = [email,name,description]
      inputs.forEach((input)=> {
          input.style.backgroundColor = "white"
          input.value = ""

      })
      alert("thank you for filling out the form")
    } else{
      if (verificarInputs(email) || !email.value.incluides("@")){
        email.style.backgroundColor = "red"
      }
      if (verificarInputs(name)){
        name.style.backgroundColor = "red"
      }
      if (verificarInputs(description)){
        description.style.backgroundColor = "red"
      }
      }
    

  });