//Vi börjar med variabler

const input = document.querySelector("#inputToDo");
const addBtn = document.querySelector("button");
const list = document.querySelector("ul");
const todoArray = [];

// Här kommer kod för saker som ska hända
addBtn.addEventListener(
  "click",

  function () {
    let text = input.value;
    todoArray.push(text);
    const item = document.createElement("li");
    list.appendChild(item);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;

    item.appendChild(itemLabel);

    // lysssnare på itemLabel
    itemLabel.addEventListener(
      "click",

      function () {
        if(item.getAttribute("class") == "completed"){
            item.setAttribute("class", "");

        }
        else {
            item.setAttribute("class", "completed");

        }

      }
    );
  }
);
