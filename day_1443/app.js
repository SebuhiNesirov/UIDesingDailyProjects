const modal = document.querySelector("#myModal");

const openBtn = document.querySelector("#modalBtn");

const closeBtn = document.querySelector("#close");


openBtn.onclick = function() {
    modal.style.display = "block";
    openBtn.style.display = "none";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
    openBtn.style.display = "block";
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
        openBtn.style.display = "block";
    }
}