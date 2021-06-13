const todoLists = document.getElementsByClassName("todoList");

for (const todoList of todoLists) {
    const input = todoList.getElementsByClassName("todoList__input")[0];
    const itemsList = todoList.getElementsByClassName("todoList__list")[0];

    const addItemToList = (item) => {
        const itemElement = document.createElement("SPAN");
        itemElement.innerText = item;
        itemElement.className = "todoList__listItem";

        itemElement.addEventListener("click", () => {
            itemsList.removeChild(itemElement);
        });

        itemsList.prepend(itemElement);
        itemsList.scrollTo({ top: 0, behavior: "smooth" });
    };

    console.log(input);

    input.addEventListener("change", function (event) {
        addItemToList(event.target.value);
        // Can use 'this' context because it the 'object' is the input element
        // Will not work using arrow function
        this.value = "";
    });
}
