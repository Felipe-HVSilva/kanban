// Create Task
const $inputTask = document.querySelector("#task")
const $descriptionTask = document.querySelector("#description")
const $inputTag = document.querySelector("#tag")
const $form = document.querySelector("form")
const $buttonDeleteTask = document.querySelector(".js-delete-task")

function createTask(nameTask, description, tag) {
  const taskContent = document.createElement("div")
  taskContent.classList.add("item")
  taskContent.setAttribute("draggable", true)

  const titleTask = document.createElement("h2")
  titleTask.classList.add("title")
  titleTask.innerText = `${nameTask}`
  taskContent.appendChild(titleTask)

  const buttonDeleteTask = document.createElement("button")
  const i = document.createElement("i")
  i.classList.add("ph", "ph-x")
  buttonDeleteTask.appendChild(i)
  buttonDeleteTask.addEventListener("click", deleteTask)
  titleTask.appendChild(buttonDeleteTask)

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

function saveTaskOnLocalStorage(nameTask, description, tagTask) {
  let tasksList = []

  if (localStorage.hasOwnProperty("tasks")) {
    tasksList = JSON.parse(localStorage.getItem("tasks"))
  }

  tasksList.push({ nameTask, description, tagTask })

  localStorage.setItem("tasks", JSON.stringify(tasksList))
}

function deleteTask(e) {
  const task = e.target.parentNode.parentNode.parentNode
  task.remove()
  localStorage.removeItem(tasks)
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
  saveTaskOnLocalStorage(nameTask, description, tagTask)
  closeModal()

  $inputTask.value = ""
  $descriptionTask.value = ""
  $inputTag.value = ""
})

if ($buttonDeleteTask) {
  $buttonDeleteTask.addEventListener("click", deleteTask)
}

window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"))

  if (tasks) {
    tasks.forEach((task) => {
      createTask(task.nameTask, task.description, task.tagTask)
    })
  }
}
