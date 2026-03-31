// Day 8: Image Slider

let images = [
    "https://picsum.photos/400/250?random=1",
    "https://picsum.photos/400/250?random=2",
    "https://picsum.photos/400/250?random=3",
    "https://picsum.photos/400/250?random=4"
];

let index = 0;

// Show next image
function nextSlide() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    updateImage();
}

// Show previous image
function prevSlide() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    updateImage();
}

// Update image
function updateImage() {
    document.getElementById("slide").src = images[index];
    console.log("Current image index:", index);
}
