console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=C7u6nYC8PXnTdocGEz8KcCwJgKUKZkzb&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

let data = fetch(endpoint);
let images = [data]
console.log(images);

let gifs = document.getElementById("gif-container")
let button = document.getElementById("fetch-gif-btn")
button.addEventListener("click", async() => {
    images.forEach(function(data) {
        gifContainer.innerHTML += `<img src=${"https://giphy.com/gifs/kitty-ai-meowtakeover-7NNqJw0T3cb62PMzXR"} class = "col-3 mb-3">`
    });
});