window.onload = function() {
    document.getElementById("add").onclick = addItemToDo;
};
const items = [];

const addItemToDo= function() {
  const text = document.getElementById("textbox").value;

  items.push({
    priority: "low",
    complete: false,
    content: text
  });

  document.getElementById("theInput").value = "";

  renderItems();
};
