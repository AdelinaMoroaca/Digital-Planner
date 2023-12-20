/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//----Local storage----------------------------------------------------------------------

let descriptionTask = document.getElementById("descriptionTask");
let dateTask = document.getElementById("dateTask");
let repeatedTask = document.getElementById("repeatedTask");
let prioritisingTask = document.getElementById("prioritisingTask");
let timeTask = document.getElementById("timeTask");
let typeTask = document.getElementById("typeTask");
let addNewTask = document.getElementById("addNewTask");

class Task {
  constructor(description, date, repeated, prioritising, time, type) {
    this.description= description;
    this.date = date;
    this.repeated = repeated;
    this.prioritising = prioritising;
    this.time = time;
    this.type = type;
  }
}

let tasks = [];
let taskList = localStorage.getItem("bazaTasks");
if (taskList != null) {
  tasks = JSON.parse(taskList);
}
addNewTask.addEventListener("click", function () {
  console.log("testCT");

  let task = new Task(
    descriptionTask.value,
    dateTask.value,
    repeatedTask.value,
    prioritisingTask.value,
    timeTask.value,
    typeTask.value

  );
  tasks.push(task);
  localStorage.setItem("bazaTasks", JSON.stringify(tasks));
  descriptionTask.value = "";
  dateTask.value = "";
  repeatedTask.value = "";
  prioritisingTask.value = "";
  timeTask.value = "";
  typeTask.value = "";
});

//--------------------------------------------------------------
// var newTask = localStorage.getItem("bazaTasks");
// newTask.forEach(task => {
//   let card = document.createElement('div');
//   let newDescriptionTask = document.createElement('p');
//   let newDateTask = document.createElement('p');
//   let newRepeatedTask = document.createElement('p');
//   let newPrioritisingTask = document.createElement('p');
//   let newTimeTask = document.createElement('p');
//   let newTypeTask = document.createElement('p');


//   newDescriptionTask.textContent = task.description;
//   newDateTask.textContent = task.date;
//   newRepeatedTask.textContent = task.repeated;
//   newPrioritisingTask.textContent = task.prioritising;
//   newTimeTask.textContent = task.time;
//   newTypeTask.textContent = task.type;

// });

