const $firstDropzone = document.querySelector("#js-first-dropzone")
const $buttonAddTask = document.querySelector("#addTask")
const $buttonCloseModal = document.querySelector(".close-modal")
const $modalOverlay = document.querySelector(".overlay")
const $modal = document.querySelector(".modal")

function unloadScrollBars() {
  document.documentElement.style.overflow = "hidden"
  document.body.scroll = "no" // IE
}

function reloadScrollBars() {
  document.documentElement.style.overflow = "auto"
  document.body.scroll = "yes" // IE
}

function closeModal() {
  reloadScrollBars()
  $modal.classList.remove("active")
}

function openModal() {
  unloadScrollBars()
  $modal.classList.add("active")
}

$buttonAddTask.addEventListener("click", openModal)

$buttonCloseModal.addEventListener("click", closeModal)

$modalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    closeModal()
  }
})
