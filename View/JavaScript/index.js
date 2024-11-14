let currentIndex = 0
const images = document.querySelectorAll(".carousel-images img")

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none"
    })
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length
    showImage(currentIndex)
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    showImage(currentIndex)
}

showImage(currentIndex)
