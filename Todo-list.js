TodoList = JSON.parse(localStorage.getItem('TodoList'));
function AddToList(){
  const inputName = document.querySelector('.js-input-name');
  const taskname = inputName.value;
  const inputDate = document.querySelector('.js-due-date');
  const duedate = inputDate.value;
  if(taskname){
  TodoList.push({taskname,duedate});
  localStorage.setItem('TodoList',JSON.stringify(TodoList));
  DisplayHTML();
  }
  inputName.value = '';
  inputDate.value = '';
  DisplayHTML();
}
function DisplayHTML(){
  let DisplayHTML = ``;
  for(let i=0;i<TodoList.length;i++){
    let Todos = TodoList[i];
    let html = `
    <div class="tasks">${i+1}) ${Todos.taskname}</div>
    <div class="tasks">${Todos.duedate}</div>
    <div><button class="delete-button" onclick="Delete(${i})">Delete</button></div>
    `;
    DisplayHTML+=html;
  }
  document.querySelector('.js-display-html').innerHTML = DisplayHTML;
}
function Delete(index){
  TodoList.splice(index,1);
  localStorage.setItem('TodoList',JSON.stringify(TodoList));
  DisplayHTML();
}
function ClearAll(index){
  TodoList.splice(index);
  localStorage.setItem('TodoList',JSON.stringify(TodoList));
  DisplayHTML();
}
DisplayHTML();

