const link = document.querySelector(".link");
const items = document.querySelectorAll(".items");

items.forEach(function(div){
    div.addEventListener("click", function(){
        link.querySelector(".active").classList.remove("active");
        div.classList.add("active");
    })
})