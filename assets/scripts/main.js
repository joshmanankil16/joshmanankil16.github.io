const body = document.body

const div =document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

console.log(spanHi.getAttribute("id"))
spanHi.setAttribute("id","change-id")
spanHi.removeAttribute("id")

console.log(spanHi.dataset)
spanHi.dataset.newName = "My new name"