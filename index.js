function plus() {
	if(document.getElementById("addInput").style.display == "none" && document.getElementById("addBtn").style.display == "none"){
		document.getElementById("addInput").style.display = "inline-block";
		document.getElementById("addBtn").style.display = "inline-block";
	}else {
		document.getElementById("addInput").style.display = "none";
		document.getElementById("addBtn").style.display = "none";
	}
}
function add() {
	let h3 = document.createElement("H3");
	let remove = document.createElement("BUTTON");
	let value = document.createTextNode(document.getElementById("addInput").value)
	remove.addEventListener("click", del)
	h3.appendChild(value)
	document.getElementById("tasks").appendChild(h3)
	h3.appendChild(remove)
	remove.innerHTML = "X";
	remove.style.marginLeft = "2px"
	function del() {
		h3.remove();
}
}