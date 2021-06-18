// selectors
const arrows = document.querySelectorAll(".fa-arrow-right");
const form = document.querySelector("form");


// functions
const animateForm = (e) => {
	e.preventDefault();
	arrows.forEach((arrow) => {
		const input = arrow.previousElementSibling;
		const parent = arrow.parentElement;
		const nextForm = parent.nextElementSibling;
		debugger

		if (input.type === "text") {
			nextSlide(parent, nextForm);
		} else {
			document.body.style.backgroundColor = "red";
		}
	});
};

const nextSlide = (parent, nextForm) => {
	parent.classList.add("inactive");
};

// event Listeners
// getting error -- arrows... is not a function
// arrows.addEventListener("click", animateForm);
form.addEventListener("submit", animateForm);
