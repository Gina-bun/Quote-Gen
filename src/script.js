const quoteContainer = document.getElementById("quote-container")
const quoteWrapper = document.getElementById("quote")
const generateButton = document.getElementById("generate-button")

const errorMessage = document.getElementById("error-message")

//share buttons
const copyQuoteButton = document.getElementById("copy-quote")
const twitterButton = document.getElementById("twitter-share")
const instagramButton = document.getElementById("instagram-share")
const whatsappButton = document.getElementById("whatsapp-share")

//download quote (as image) button
const downloadButton = document.getElementById("download-quote")

window.addEventListener("load", () => {
    generateQuote()
})

async function generateQuote() {
    const url = "https://dummyjson.com/quotes/random"

     try{
        quoteWrapper.innerHTML = `<div class="loader"></div>`

        const [data] = await Promise.all([
            fetch(url).then(response => response.json()),
            new Promise(resolve => setTimeout(resolve, 800))//loader loads for at least 800ms to feel more natural
        ])


        quoteWrapper.textContent = ""


        displayQuote(data)


     }
     catch(error){
         quoteWrapper.classList.add("hidden")
         errorMessage.classList.remove("hidden")
         errorMessage.textContent = "An error occurred while getting the quote. Please try again."
     }
}

function displayQuote(quote) {
    quoteWrapper.innerHTML = `<p class="text-[18px] ">${quote.quote}</p>
    <p class="text-right text-[16px] mt-3 font-bold">- ${quote.author}</p>`
}

generateButton.addEventListener("click", () => {
    quoteWrapper.classList.remove("hidden")
    errorMessage.classList.add("hidden")
    generateQuote()
})