const itemList = [];

document.getElementById("btnAddTask").addEventListener("click", addTask);

isEmptyList();
function isEmptyList(){
    if(itemList.length === 0){
        document.getElementById("list").innerHTML = "<p class='my-3 text-center'>There is no tasks yet, try adding one!</p>";
    }
}

function refreshList(){
    let list = "<div class='my-3'>";
    for (let i = 0; i < itemList.length; i++) {
        list += "<div class='mx-4 d-flex'>" + 
        "<p id=" + i + " class='m-2'></p>" +
        "<button class='btn btn-outline-danger align-self-center' type='button' onclick='removeTask(" + i + ")'>Remove</button>" +
        "</div>";
    }
    document.getElementById("list").innerHTML = list + "</div>";
    for (let i = 0; i < itemList.length; i++) {
        document.getElementById(i).textContent = itemList[i];
    }
    refreshCounter()
}

function refreshCounter(){
    if(itemList.length === 0){
        document.getElementById("counter").textContent = "";
    } else {
        document.getElementById("counter").textContent = "You have " + itemList.length + " task(s) in your list!";
    }
    
}

function addTask(){
    const value = document.getElementById("inputAddTask").value;
    document.getElementById("inputAddTask").value = "";
    if (value !== ""){
        itemList.push(value);
        document.getElementById("alert").classList.add("d-none");
        refreshList();
    } else {
        document.getElementById("alert").classList.remove("d-none");
    }
}

function removeTask(index){
    itemList.splice(index, 1);
    refreshList();
    isEmptyList();
}