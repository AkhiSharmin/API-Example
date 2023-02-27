
// const loadQuote = () => {
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         .then(data => displayQuote(data))
// }

// const displayQuote = quote => {
//     const blockQuote = document.getElementById('quote');
//     blockQuote.innerHTML = quote.quote;
// }

// loadQuote()


// function displayQuote() {
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         .then(data => loadQuote(data))
// }

// const loadQuote = data => {
//     const blockQuote = document.getElementById('quote');
//     blockQuote.innerHTML = data.quote;
// }

// displayQuote()





function loadQuote() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}


const displayQuote = quote => {
    const blockQuote = document.getElementById('quote')
    blockQuote.innerHTML = quote.quote;
}


loadQuote()