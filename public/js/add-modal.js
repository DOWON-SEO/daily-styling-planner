const modalToggleBtn = document.querySelector(".add-modal-toggler")
const addModalbg = document.querySelector(".add-modal-background")
const addModal = document.querySelector(".add-modal-container")

modalToggleBtn.addEventListener("click", () => {
    addModalbg.style.display = "flex"
})

addModalbg.addEventListener("click", (e) => {
    if(e.target == addModalbg){
        addModalbg.style.display = "none"
    }
})