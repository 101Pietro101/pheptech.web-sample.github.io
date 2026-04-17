
// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");

// Store a reference to the <img> in a variable
const myImage = document.querySelector("img");

// Store a reference to the <li> in a variable
const listItems = document.querySelectorAll("li");

// Store a reference to the <button> in a variable
let myButton = document.querySelector("button");

// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

// Update the img content of the <img>
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "../first-website/images/icon_first_web_site.jpg") {
        myImage.setAttribute("alt", "My second test image");
        myImage.setAttribute("src", "images/image_2.jpg");
    } else {
        myImage.setAttribute("alt", "My first test image");
        myImage.setAttribute("src", "../first-website/images/icon_first_web_site.jpg");
    }
});

// Update the li content of the <li>
function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

// Update the head content of the <head>
function setUserName() {
    let myName = prompt('Please enter your name.');

    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');

    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.addEventListener("click", () => {
    setUserName();
});