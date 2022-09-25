let adviceId = document.querySelector(".advice-id");
let adviceContent = document.querySelector(".advice-content");
let updateButton = document.querySelector(".button-wrapper");


fetchAdvice();

updateButton.addEventListener("click", fetchAdvice);

function fetchAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then((response)=> response.json())
    .then((dataObject) => (dataObject.slip))
    .then((result) => {
        adviceId.innerHTML = `ADVICE #${result.id}`;
        adviceContent.innerHTML = `“${result.advice}”`;
    });
};