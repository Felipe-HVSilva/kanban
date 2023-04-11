// Create Task
const $inputTask = document.querySelector("#task")
const $descriptionTask = document.querySelector("#description")
const $inputTag = document.querySelector("#tag")
const $form = document.querySelector("form")
const $buttonDeleteTask = document.querySelector(".js-delete-task")

function createTask(nameTask, description, tag, taskId) {
  const taskContent = document.createElement("div")
  taskContent.classList.add("item")
  taskContent.setAttribute("draggable", true)
  taskContent.setAttribute("data-id", `${taskId}`)

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

function saveTaskOnLocalStorage(nameTask, description, tagTask, taskId) {
  let tasksList = []

  if (localStorage.hasOwnProperty("tasks")) {
    tasksList = JSON.parse(localStorage.getItem("tasks"))
  }

  tasksList.push({ nameTask, description, tagTask, taskId })

  localStorage.setItem("tasks", JSON.stringify(tasksList))
}

function removeTaskOnToLocalStorage(idTask) {
  let tasksList = []
  let newArray = []

  if (localStorage.hasOwnProperty("tasks")) {
    tasksList = JSON.parse(localStorage.getItem("tasks"))
  }

  tasksList.forEach((task) => {
    if (task.taskId !== Number(idTask)) {
      newArray.push(task)
    }
  })

  tasksList.filter((task) => task.taskId !== Number(idTask))

  localStorage.setItem("tasks", JSON.stringify(newArray))
}

function deleteTask() {
  const task = this.parentElement.parentElement
  const idTask = task.getAttribute("data-id")

  task.remove()
  removeTaskOnToLocalStorage(idTask)
}

$form.addEventListener("submit", (e) => {
  e.preventDefault()

  const nameTask = $inputTask.value
  const description = $descriptionTask.value
  const tagTask = $inputTag.value
  const taskId = Math.floor(Math.random() * 100)

  if (nameTask === "" || description === "" || tagTask === "") {
    alert("Ops, algum campo não foi preenchido!")
    return
  }

  createTask(nameTask, description, tagTask, taskId)
  saveTaskOnLocalStorage(nameTask, description, tagTask, taskId)
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
      createTask(task.nameTask, task.description, task.tagTask, task.taskId)
    })
  }
}
