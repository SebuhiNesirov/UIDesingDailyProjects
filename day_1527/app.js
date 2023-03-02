
const button = document.getElementById("down");
const text = document.getElementById("text");
const drop = document.getElementById("drop");

text.style.display = "none";
drop.style.transform = "0deg";

button.addEventListener("click", (event) => {
    if (text.style.display == "none") {
        text.style.display = "block"
        drop.style.transform = 'rotate(90deg)'
    } else if (text.style.display == "block") {
        text.style.display = "none"
        drop.style.transform = "rotate(0)"
    }
})



