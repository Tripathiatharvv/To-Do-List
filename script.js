const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list")
function addTask(){
    if(inputBox.value ==== ''){
        alert("No Tasks to enter?");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  
    }
    }