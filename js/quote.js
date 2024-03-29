const img = document.querySelector("#images");
const cover = document.querySelector(".img-cover");
const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const quotes = [
    {
        quote: "The way to get started\nis to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens\nwhen you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those\nwho do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Believe you can and you’re halfway there.",
        author: "Teddy Roosevelt",
    },
    {
        quote: "To Travel is to Live.",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Be positive. Be true. Be kind.",
        author: "Roy T. Bennett",
    },
    {
        quote: "You only live once,\nbut if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do not love.",
        author: "Hemmingway",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
    {
        quote: "Don’t focus on negative things;\nFocus on the positive, and you will flourish.",
        author: "Alek Wek",
    },
    {
        quote: "A problem is a chance for you to do your best.",
        author: "Duke Ellington",
    },
    {
        quote: "Light tomorrow with today!",
        author: "Elizabeth Barrett Browning",
    },
];

function handleImages() {
    const choseImage = Math.floor(Math.random() * 10);
    const bgImage = document.createElement("img");
    const quoteAll = document.querySelector("#quote");

    bgImage.src = `img/image${choseImage + 1}.jpeg`;
    bgImage.classList.add("imgs");
    img.appendChild(bgImage);
    quoteAll.addEventListener("click", handleQuoteImages);
}

function handleQuote() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = `${todaysQuote.quote}`;
    author.innerText = `― ${todaysQuote.author}`;
}

function handleQuoteImages(event) {
    const imgs = event.target.parentElement.parentElement.querySelector(".imgs");
    
    imgs.remove();
    handleQuote();
    handleImages();
}


handleQuote();
handleImages()