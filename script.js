const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
	if(inputBox.value===''){
		alert("you must write something!");
	}
	else{
		let li=document.createElement("li");
		li.innerHTML=inputBox.value;
		listContainer.appendChild(li);
		//add cancel icon
		let span=document.createElement("span");
		span.innerHTML="\u00d7";
		li.appendChild(span);
	}
	inputBox.value="";
	saveData();//save the updated content in the browser
}

//when u click on the container all the tasks are stored
listContainer.addEventListener("click",function(e){
	if(e.target.tagName==="LI"){
		e.target.classList.toggle("checked");									//if u click on li then it will be checked
	}
	else if(e.target.tagName==="SPAN"){
		e.target.parentElement.remove();										//click on cross sign to delete the task
	}
},false);

//whenever new data added call the savedata to save the new data in the browser
function saveData(){
	localStorage.setITem("data",listContainer.innerHTML);						//value we want to save in our browser
}

//display the existing data whenever we open the browser
function showTask(){
	listContainer.innerHTML=localStorage.setItem("data");
}
showTask();

