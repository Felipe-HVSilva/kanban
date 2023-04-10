// Create Task
const $inputTask = document.querySelector("#task")
const $descriptionTask = document.querySelector("#description")
const $inputTag = document.querySelector("#tag")
const $form = document.querySelector("form")

function createTask(nameTask, description, tag) {
  const taskContent = document.createElement("div")
  taskContent.classList.add("item")
  taskContent.setAttribute("draggable", true)

  const titleTask = document.createElement("h2")
  titleTask.classList.add("title")
  titleTask.innerText = `${nameTask}`
  taskContent.appendChild(titleTask)

  const descriptionTask = document.createElement("p")
  descriptionTask.innerText = `${description}`
  taskContent.appendChild(descriptionTask)

  const tagTask = document.createElement("div")
  tagTask.classList.add("topic")
  const tagLink = document.createElement("a")
  tagLink.setAttribute("href", "#")
  tagLink.innerText = `${tag}`
  tagTask.appendChild(tagLink)

  taskContent.appendChild(tagTask)

  taskContent.addEventListener("dragstart", dragstart)
  taskContent.addEventListener("drag", drag)
  taskContent.addEventListener("dragend", dragend)

  $firstDropzone.appendChild(taskContent)
}

$form.addEventListener("submit", (e) => {
  e.preventDefault()

  const nameTask = $inputTask.value
  const description = $descriptionTask.value
  const tagTask = $inputTag.value

  if (nameTask === "" || description === "" || tagTask === "") {
    alert("Ops, algum campo não foi preenchido!")
    return
  }

  createTask(nameTask, description, tagTask)

  closeModal()

  $inputTask.value = ""
  $descriptionTask.value = ""
  $inputTag.value = ""
})
