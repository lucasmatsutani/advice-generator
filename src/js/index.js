const adviceId = document.querySelector(".advice-id");
const adviceQuote= document.querySelector(".advice-quote");
const updateButton= document.querySelector(".advice-update");

async function handleButtonClick() {
    const url = await fetch("https://api.adviceslip.com/advice"); 
    const response = await url.json();
    console.log(response)
    adviceId.innerText = `ADVICE #${response.slip.id}`
    adviceQuote.innerText = `"${response.slip.advice}"`
};

updateButton.addEventListener("click", () => handleButtonClick());