window.onload = function() {
     document.getElementById("add").onclick = addItemToDo;
 };
 //Puts into Array
 const items = [];

  const addItemToDo= function() {
    const text = document.getElementById("textBox").value;

    if (!text || text === '') {
      return;
    }

    items.push({
     priority: "low",
     complete: false,
     content: text,
   });
   document.getElementById("textBox").value = "";

  renderItems();
 };

//Priotiry Function

 const prioritizeItem = function() {
   if (items[this.id].priority === "low") {
     items[this.id].priority = "high";
     const item = items.splice(this.id, 1);
     items.unshift(item[0]);
   } else {
     items[this.id].priority = "low";
       const item = items.splice(this.id, 1);
       items.push(item[0]);
   }

   renderItems();
 }

//Delete Function

const removeItem = function() {
   items.splice(this.id, 1);
  renderItems();
}

//Complete function

const completeItem = function() {
  if (items[this.id].complete === false) {
    items[this.id].complete = true;
    console.log("true")

  } else {
    items[this.id].complete = false;
    console.log("false")
  }

  renderItems();

}
//Rendering Items in each list
const renderItems = function (){
  const ul = document.getElementById("ul");
     ul.innerHTML = "";

        for (let i = 0; i < items.length; i++) {
          const li = document.createElement("li");
          const div = document.createElement("div");
          div.id = "itemInList";

          const span1 = document.createElement("span");
          span1.id = i;
          span1.className = items[i].priority === "high" ? "priority high" : "priority";
          span1.innerHTML = "!";
          span1.onclick = prioritizeItem;

          const span2 = document.createElement("span");
          span2.id = i;
          span2.className = items[i].complete === true ? "item true" : "item";
          span2.innerHTML = items[i].content;

          const span3 = document.createElement("span");
          span3.id = i;
          span3.className = items[i].priority === "high" ? "completed high" :"completed";
          span3.innerHTML = "&#10004";
          span3.onclick = completeItem;

          const span4 = document.createElement("span");
          span4.id = i;
          span4.className = items[i].priority === "high" ? "remove high" :"remove";
          span4.innerHTML = "&#10008";
          span4.onclick = removeItem;

        div.append(span1);
        div.append(span2);
        div.append(span3);
        div.append(span4);
        li.append(div);
        ul.append(li);
       }
}
