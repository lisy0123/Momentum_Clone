const img = document.querySelector("#images");
const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const images = [
    "01.png", "02.png", "03.png",
    "04.png", "05.png",
]

const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote:
      "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do not love.",
        author: "Hemmingway",
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
];

function handleImages() {
    const choseImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement("img");
    const quote = document.querySelector("#quote");

    bgImage.src = `img/${choseImage}`;
    bgImage.classList.add("imgs");
    img.appendChild(bgImage);
    bgImage.addEventListener("click", rehandleImages);
    quote.addEventListener("click", handleQuoteImages);
}

function rehandleImages(event) {
    const imgs = event.target;
    imgs.remove();
    handleImages();
}

function handleQuoteImages(event) {
    const imgs = event.target.parentElement.parentElement.querySelector(".imgs");
    imgs.remove();
    handleImages();
}

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `“ ${todaysQuote.quote}  ”`;
author.innerText = `― ${todaysQuote.author}`;

handleImages()