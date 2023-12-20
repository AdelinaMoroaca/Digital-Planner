let localStorageUser = JSON.parse(localStorage.loggedInUser);
$("#userName").text(localStorageUser.user + "  esti logat");

let createNewTask = document.getElementById("createNewTask");

let mondayCards = document.getElementById("Monday");
let tuesdayCards = document.getElementById("Tuesday");
let wednesdayCards = document.getElementById("Wednesday");
let thursdayCards = document.getElementById("Thursday");
let fridayCards = document.getElementById("Friday");
let saturdayCards = document.getElementById("Saturday");
let sundayCards = document.getElementById("Sunday");

let tasks = JSON.parse(localStorage.getItem("bazaTasks"));

const DAY_NAME_OF_WEEK_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


tasks.forEach(task => {
   let card = document.createElement("div");
   card.classList.add("newTask");
   
      let taskTitle = document.createElement("p");
      taskTitle.textContent = task.description;
      taskTitle.classList.add("task");
      taskTitle.classList.add("taskTitle");
      card.appendChild(taskTitle);

      let prioDay = document.createElement("div");
      prioDay.classList.add("prioDay");
      card.appendChild(prioDay);

         let taskPrio = document.createElement("p");
         taskPrio.classList.add("task");
         taskPrio.classList.add("taskPrio");
         taskPrio.textContent = task.prioritising;
         prioDay.appendChild(taskPrio);

         let taskStatus = document.createElement("p");
         taskStatus.classList.add("task");
         taskStatus.classList.add("taskStatus");
         taskStatus.textContent = task.type;
         prioDay.appendChild(taskStatus);

         let taskDay = document.createElement("p");
         taskDay.classList.add("task");
         taskDay.classList.add("taskDay");
         taskDay.textContent = task.repeated;
         prioDay.appendChild(taskDay);

      let taskDate = document.createElement("p");
      taskDate.classList.add("task");
      taskDate.classList.add("taskDuration");
      taskDate.textContent = task.date;
      card.appendChild(taskDate);

      let date = new Date(task.date);
      let taskDayOfWeek = DAY_NAME_OF_WEEK_LONG[date.getDay()];


      let typeRepeat = document.createElement("div");
      typeRepeat.classList.add("typeRepeat");
      card.appendChild(typeRepeat);

         

         let taskDuration = document.createElement("p");
         taskDuration.classList.add("task");
         taskDuration.classList.add("taskType");
         taskDuration.textContent = task.time;
         typeRepeat.appendChild(taskDuration);

         // let taskRepeat = document.createElement("p");
         // taskRepeat.classList.add("task");
         // taskRepeat.classList.add("taskRepeat");
         // taskRepeat.textContent = task.;
         // typeRepeat.appendChild(taskRepeat);


   switch(taskDayOfWeek) {
      case "Monday":
         mondayCards.appendChild(card);
         break;
      case "Tuesday":
         tuesdayCards.appendChild(card);
         break;
      case "Wednesday":
         wednesdayCards.appendChild(card);
         break;
      case "Thursday":
         thursdayCards.appendChild(card);
         break;
      case "Friday":
         fridayCards.appendChild(card);
         break;
      case "Saturday":
         saturdayCards.appendChild(card);
         break;
      case "Sunday":
         sundayCards.appendChild(card);
         break;
      default:
      }

});

