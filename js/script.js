console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=C7u6nYC8PXnTdocGEz8KcCwJgKUKZkzb&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

let data = fetch(endpoint);
let images = [data]
console.log(images);