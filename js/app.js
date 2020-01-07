window.onload = function() {
     document.getElementById("add").onclick = addItemToDo;
 };
 const items = [];

  const addItemToDo= function() {
    const text = document.getElementById("textBox").value;

    if (!text || text === '') {
      return;
    }

    items.push({
     priority: "low",
     complete: false,
     content: text
   });
   document.getElementById("textBox").value = "";

  renderItems();
 };

 const prioritizeItem = function() {
   // find item in array
   if (items[this.id].priority === "low") {
     items[this.id].priority = "high";
     const item = items.splice(this.id, 1);
     items.unshift(item[0]);
   } else {
     items[this.id].priority = "low";
     const item = items.splice(this.id, 1);
     items.push(item);
   }
  renderItems();
 }


const renderItems = function (){
  const ul = document.getElementById("ul");
     ul.innerHTML = "";

        for (let i = 0; i < items.length; i++) {
          const li = document.createElement("li");
          const div = document.createElement("div");
          div.id = "itemInList";

          const span1 = document.createElement("span");
          span1.id = i;
          span1.className = "priority";
          span1.innerHTML = "!";
          span1.onclick = prioritizeItem;

          const span2 = document.createElement("span");
          span2.id = i;
          span2.className = "item";
          span2.innerHTML = items[i].content;

          const span3 = document.createElement("span");
          span3.id = i;
          span3.className = "completed";
          span3.innerHTML = "&#10004";
          //span3.onclick = completeItem();

          const span4 = document.createElement("span");
          span4.id = i;
          span4.className = "remove";
          span4.innerHTML = "&#10008";
          //span4.onclick = removeItem();

        div.append(span1);
        div.append(span2);
        div.append(span3);
        div.append(span4);
        li.append(div);
        ul.append(li);
       }
}
