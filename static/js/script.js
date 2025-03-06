const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete">X</button>
    `;
    todoList.appendChild(listItem);
    input.value = "";

    // Mark task as done when clicked
    listItem.querySelector("span").addEventListener("click", () => {
      listItem.classList.toggle("done");
    });

    // Delete task
    listItem.querySelector(".delete").addEventListener("click", () => {
      listItem.remove();
    });
  }
});
