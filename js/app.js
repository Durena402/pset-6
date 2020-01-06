window.onload = function() {
    document.getElementById("add").onclick = addItemToDo;
};
const items = [];

const addItemToDo= function() {
  const text = document.getElementById("textBox").value;

  items.push({
    priority: "low",
    complete: false,
    content: text
  });

  document.getElementById("theInput").value = "";

  renderItems();
};

const renderItems = function(){
  const list = document.getElementById("textBox");
    list.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
      const li = document.createElement("li");

      const div = document.createId("itemInList");
      div.innerHTML = items[i].content;

      li.append(div);
      list.append(li);
    }
}
