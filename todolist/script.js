const todoForm= document.getElementById("todoForm");
const todoInput= document.getElementById("todoInput");
const todoList= document.getElementById("todoList");

//görev ekleme
todoForm.addEventListener('submit',function(event){
    event.preventDefault();

    const todoText = todoInput.value.trim();
    if (todoText !== ""){
        const todoItem = document.createElement("li");
        todoItem.classList.toggle("todoItem");
        todoItem.textContent = todoText;
        //görevi listeye ekle
        todoList.appendChild(todoItem);

        //inputu temizle
        todoInput.value ="";
        todoItem.addEventListener('click', function() {
            todoItem.classList.toggle('completed');
        });

        // Görevi silme
        todoItem.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            todoItem.remove();
        });
    }
});