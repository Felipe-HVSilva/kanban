const cards = document.querySelectorAll(".item")
const dropzones = document.querySelectorAll(".dropzone")

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})

function dragstart() {
  this.classList.add("is-dragging")
}

function drag() {}

function dragend() {
  this.classList.remove("is-dragging")
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", dragover)
})

function dragover() {
  const cardBeingDragged = document.querySelector(".is-dragging")

  this.appendChild(cardBeingDragged)
}
