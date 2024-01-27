

window.document.addEventListener("click", function (e) {
    if (e.target.dataset.plus) {
        console.log("hi")
        showAnswer(e.target.dataset.plus)
    }
})

function showAnswer(answer) {
    document.getElementById(answer).classList.toggle("hide")
    document.querySelectorAll(`[data-plus=${answer}]`).forEach(element => element.classList.toggle("hide"))

}