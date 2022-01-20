const form = document.querySelector("#form"),
input = document.querySelector("#input"),
todosUL = document.querySelector("#todos");

const todos = JSON.parse(localStorage.getItem("todos"));

// Save Our "Todos" to Local Storage
if(todos) {
          todos.forEach(todo => {
                    addTodo(todo);
          })
}

function addTodo(todo) {
          let todoText = input.value;
          if(todo) {
                    todoText = todo.text;
          }

          // Build Lis list
          if(todoText) {
                    const todoEl = document.createElement("li");
                    if(todo && todo.completed) {
                              todoEl.classList.add("completed");
                    }
                    todoEl.innerText = todoText;

                    // Mark as Completed
                    todoEl.addEventListener("click", ()=> {
                              todoEl.classList.toggle("completed");
                              updateLS();
                    })

                    // Delete
                    todoEl.addEventListener('contextmenu', (e)=>{
                              e.preventDefault();
                              todoEl.remove();
                              updateLS();
                    })

                    // Add it to the DOM
                    todosUL.appendChild(todoEl);

                    // alert("Todo Added Successfuly");
                    input.value = "";
                    updateLS();
          }
}

form.addEventListener("submit", (e)=> {
          e.preventDefault();
          addTodo();
})

function updateLS() {
          todosEl = document.querySelectorAll("li");

          const todos = [];

          todosEl.forEach((todoEl) => {
                    todos.push({
                              text: todoEl.innerText,
                              completed: todoEl.classList.contains('completed')
                    })
          })

          localStorage.setItem("todos", JSON.stringify(todos));

          console.log(todos);
}