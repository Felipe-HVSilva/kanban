const $buttonAddTask = document.querySelector("#addTask")
const $buttonCloseModal = document.querySelector(".close-modal")
const $modalOverlay = document.querySelector(".overlay")
const $modal = document.querySelector(".modal")

function closeModal() {
  $modal.classList.remove("active")
}

function openModal() {
  $modal.classList.add("active")
}

$buttonAddTask.addEventListener("click", openModal)

$buttonCloseModal.addEventListener("click", closeModal)

$modalOverlay.addEventListener("click", closeModal)
