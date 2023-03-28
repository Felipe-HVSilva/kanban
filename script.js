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
  dropzone.addEventListener("dragenter", dragenter)
  dropzone.addEventListener("dragover", dragover)
  dropzone.addEventListener("dragleave", dragleave)
  dropzone.addEventListener("drop", drop)
})

function dragenter() {
  console.log(" Enter in zone ")
}

function dragover() {
  const cardBeingDragged = document.querySelector(".is-dragging")

  this.appendChild(cardBeingDragged)
}

function dragleave() {
  console.log(" leave in Zone")
}

function drop() {
  console.log(" Drop")
}
