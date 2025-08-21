document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todolist = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo)

    document.addEventListener('keypress', (event) => {
        console.log()
        if (event.key == 'Enter') {
            addTodo();
        }
    })

    function addTodo() {
        
        // Pegar o que ta escrito no input
        const texto = todoInput.value.trim();

        // verificar se tem algo
        if (texto !== '') {
          const li =  document.createElement('li');
          li.textContent = texto;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = "Deletar";
          deleteButton.className = "delete-button";
          deleteButton.addEventListener('click', () => {
          todolist.removeChild(li);
          })
          
          
          li.appendChild(deleteButton);
          todolist.appendChild(li);
          todoInput.value = '';
          todoInput.focus();
        }
        
    }

})