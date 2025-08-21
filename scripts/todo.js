document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todolist = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo)

    document.addEventListener('keypress', (event) => {
        
        if (event.key == 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        
        // Pegar o que ta escrito no input
        const texto = todoInput.value.trim();

        // verificar se tem algo
        if (texto !== '') {
          const li =  document.createElement('li');
          //li.textContent = texto;

          const span = document.createElement('span');
          span.textContent = texto;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = "Deletar";
          deleteButton.className = "delete-button";
          deleteButton.addEventListener('click', () => {
          todolist.removeChild(li);
          })

          const edButton = document.createElement('button');
          edButton.textContent = "Editar";
          edButton.className = "edit-button";
          edButton.addEventListener('click', () => {
            editarItem(span, li, edButton, deleteButton);
          });

          

          li.appendChild(span);
          li.appendChild(edButton);
          li.appendChild(deleteButton);
          todolist.appendChild(li);

          todoInput.value = '';
          todoInput.focus();
        }
        
    }

    function editarItem(span, li, edButton, deleteButton) {
        const inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = span.textContent;
        inputEdit.className = 'edit-input';

        const saveButton = document.createElement('button');
        saveButton.textContent = "Salvar"
        saveButton.className = "save-button"

        li.innerHTML = '';
        li.appendChild(inputEdit);
        li.appendChild(saveButton);

        inputEdit.focus();

        inputEdit.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                salvarEdicao();
            }
        });

        saveButton.addEventListener('click', salvarEdicao);

        function salvarEdicao() {
            const novoTexto = inputEdit.value.trim();
            if (novoTexto !== '') {
                span.textContent = novoTexto;
            }

            li.innerHTML = '';
            li.appendChild(span);
            li.appendChild(edButton);
            li.appendChild(deleteButton);
        }
    }


})