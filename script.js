const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

const unsplashURL = "https://source.unsplash.com/random/";
let count = 10;

function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === count) {
        imagesLoaded = 0;
        ready = true;
        loader.hidden = true
    }
}

function getPhotosFromAPI() {
    for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = `${unsplashURL}${getRandomSize()}`;
        img.addEventListener("load", imageLoaded);
        imageContainer.appendChild(img);
    }
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 50) + 700;
}

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotosFromAPI();
    }
});

getPhotosFromAPI();
