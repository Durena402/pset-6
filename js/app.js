window.onload = function() {
     document.getElementById("add").onclick = addItemToDo;
 };
 const items = [];

  const addItemToDo= function() {
    const text = document.getElementById("textBox").value;

    if (text === '') {
    alert("You must write something!");
  }
    items.push({
     priority: "low",
     complete: false,
     content: text
   });
    renderItems();
 };

const renderItems = function (){
  const ul = document.getElementById("ul");
     ul.innerHTML = "";

        for (let i = 0; i < items.length; i++) {
          const li = document.createElement("li");
          const div = document.createElement("div");
          div.id = "itemInList";

          const span1 = document.createElement("span");
          span1.className = "priority";
          span1.innerHTML = "!";

          const span2 = document.createElement("span");
          span2.className = "item";
          span2.innerHTML = items[i].content;

          const span3 = document.createElement("span");
          span3.className = "completed";
          span3.innerHTML = "&#10004";

          const span4 = document.createElement("span");
          span4.className = "remove";
          span4.innerHTML = "&#10008";

        div.append(span1);
        div.append(span2);
        div.append(span3);
        div.append(span4);
        li.append(div);
        ul.append(li);
       }
}
