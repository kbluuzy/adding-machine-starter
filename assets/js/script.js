console.log("hello world");

function dontClick () {
    alert("I told you not to Click this! Bye!")
    window.close()
}

function addingMachine(){
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  

  if(number1 != null && number2 != null) {
    let output = number1 + number2;
    document.getElementById("output").innerHTML = output;
  }
}

function clearMachine(){
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
    document.getElementById("output").innerHTML = "";
}

function meow() {
    let meowSound = new Audio('assets/audio/cat-meow.mp3');
    meowSound.play();

}
