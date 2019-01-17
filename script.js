let count = 0;
let watToDo = function() {
	count += 1
	let div = document.querySelector('div');
	div.innerHTML = count;
}
setInterval(watToDo, 3000);

