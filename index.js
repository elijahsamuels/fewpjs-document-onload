// Your code goes here

// document.addEventListener("DOMContentLoaded", function() {
// 	console.log("The DOM has loaded");
// });

document.addEventListener("DOMContentLoaded", function () {
	contentChange()
	// console.log("The DOM has loaded");
});

// console.log(
// 	"This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );
  
function contentChange() {
	// both ways work

	document.getElementById("text").innerHTML = ("This is really cool!");

	// let a = document.getElementById("text")
	// a.innerHTML = ("This is really cool!");


	};

