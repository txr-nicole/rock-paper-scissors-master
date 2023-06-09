const button = document.querySelector(".rules");
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".modal-closeButton")

button.addEventListener("click", ()=>{
    modal.classList.toggle("open")
});

