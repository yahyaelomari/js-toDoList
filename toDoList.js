const tasksArray = []
const taskToAddElem = document.querySelector('.js-taskToAdd')
const taskDivElem=document.querySelector('.js-tasksDiv')
const dueDateInputElem = document.querySelector('.js-dateInput')


    function generateToDoList()
    {
        let toDoTasks='';
        for(let i=0;i<tasksArray.length;i++)
        {
            let taskObj = tasksArray[i];
            const name = taskObj.name;
            const {dueDate}=taskObj;

            let tasks = `
<div>${name}</div> 
<div>${dueDate}</div>
<button class="deleteTaskBtn" onclick="tasksArray.splice(${i},1);generateToDoList();">Delete</button>
`
                toDoTasks+=tasks
        }

        console.log('--------------------------------------------------------------------')
        console.log(toDoTasks)

        taskDivElem.innerHTML=`${toDoTasks}`;
    }

function addTask() {
    let newTaskInput = taskToAddElem.value;
    let newDueDate =dueDateInputElem.value;

    tasksArray.push({name:newTaskInput,dueDate:newDueDate}) //add input value to array
    tasksArray.reverse()
    taskToAddElem.value = ''//empty input string

    generateToDoList()
}

function addTaskEventKey(event)
    {
      if(event.key === 'Enter')
      {
          addTask()
      }
    }




