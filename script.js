var button = querySelector("button")
function addListAfterClick() {
	var li = document.querySelector("li")
li.className = "done";
}
button.addEventListner("click", addListAfterClick)