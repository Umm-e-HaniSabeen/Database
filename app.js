var list = document.getElementById("list");
firebase.database().ref('todos').on('child_added',function(data){
// creat li tag with text node
    var li = document.createElement("li")
    var liText = document.createTextNode(data.val().value)
    li.appendChild(liText)



    //creat delete button
var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.setAttribute("id",data.val().key)
delBtn.appendChild(delText)


//creat edit button

var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.setAttribute("id",data.val().key)
editBtn.appendChild(editText)



li.appendChild(delBtn)
li.appendChild(editBtn)
list.appendChild(li)
})

function addTodo(){
    var todo_item = document.getElementById("todo-item");
var dataBase = firebase.database().ref('todos');
 var key = dataBase.push().key;
 var todo = {
     value: todo_item.value,
     key: key
 }
dataBase.child(key).set(todo)



    






todo_item.value = ""
console.log(li)
}


function deleteItem(e){
   firebase.database().ref('todos').child(e.id).remove()
e.parentNode.remove()
}

function editItem(e){

 var val = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)
 

var editTodo = {
    value: val,
    key: e.id
}
firebase.database().ref('todos').child(e.id).set(editTodo)

    e.parentNode.firstChild.nodeValue = val
}


function deleteAll(){
    list.innerHTML = ""
}