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

async function generateQuote() {
    const url = "https://dummyjson.com/quotes/random"

     try{
        const response = await fetch(url)
        const data = await response.json(response)
        console.log(data)

        displayQuote(data)

     }
     catch(error){
         quoteWrapper.classList.add("hidden")
         errorMessage.classList.remove("hidden")
         errorMessage.textContent = "An error occurred while getting the quote. Please try again."
     }
}

function displayQuote(quote) {
    quoteWrapper.textContent = `${quote.quote} - ${quote.author}`
}

generateButton.addEventListener("click", () => {
    quoteWrapper.classList.remove("hidden")
    errorMessage.classList.add("hidden")
    generateQuote()
})