


document.addEventListener("DOMContentLoaded", () => {
    const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "image/firefox-icon.png") {
        myImage.setAttribute("src", "image/firefox2.png");
    } else {
        myImage.setAttribute("src", "image/firefox-icon.png");
    }
    };
});