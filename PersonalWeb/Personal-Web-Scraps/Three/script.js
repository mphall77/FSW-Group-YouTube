

// *********************************** faders Kevin Powell -- observers
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
	threshold: 1,
	// trigger the fade att -100 from the bottom of the screen
	rootMargin: "0px 0px -100px 0px",
};

// observer
const appearOnScroll = new IntersectionObserver(function (
	entries,
	appearOnScroll
) {
	// loop each section
	entries.forEach((entry) => {
		// if screen is NOT at an intersection just keep going else trigger the observer
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add("appear");
			// stop observing once on the screen
			appearOnScroll.unobserve(entry.target);
		}
	});
},
appearOptions);

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});

// end Kevin Powell observer for fade-in

// ***************************************** DEV ED -- card observer
// !!! -- broke the code when I changed the about,home, contact classes to id's so I can activate the links in the nav bar
// !!! -- added a new class but does not work

// nav bar
// selectors
const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

// !!! -- broken NOt changing color for each link in nav bar
const gradients = [
	"linear-gradient(to right top, #c25f44, #eea849)",
	"linear-gradient(to right top, #005c97, #363795)",
	"linear-gradient(to right top, #eb504e, #802321)",
	"linear-gradient(to right top, #9acd32, #196e19)"
];

// what is the trigger to activate the observer ==> change at 70% on the screen
const options = {
	threshold: 0.7
};

// function
const navCheck = (entries) => {
	entries.forEach((entry) => {
		// get class name of each section
		const className = entry.target.className;
		// which section are we currently on?
		const activeAnchor = document.querySelector(`[data-page=${className}]`);
		// get the gradient index (0, 1, 2 etc.) from the html
		const gradientIndex = entry.target.getAttribute("data-index");
		// get coordinates of the tag to give to bubble --> create height and width of the bubble
		const coordinates = activeAnchor.getBoundingClientRect();
		const directions = {
			height: coordinates.height,
			width: coordinates.width,
			top: coordinates.top,
			left: coordinates.left,
		};

		if (entry.isIntersecting) {
			bubble.style.setProperty("height", `${directions.height}px`);
			bubble.style.setProperty("width", `${directions.width}px`);
			bubble.style.setProperty("top", `${directions.top}px`);
			bubble.style.setProperty("left", `${directions.left}px`);
			bubble.style.background = gradients[gradientIndex];
		}
	});
};



// get rid of the scroll and use intersection observer to run a function to
// switch the areas
let observer = new IntersectionObserver(navCheck, options);

// look at each section
sections.forEach((section) => {
	observer.observe(section);
});

// **************************************
// animation of the card
// !!! -- apply this to a hover state on the card
// !!! -- fix the para text -- does not become 3-D anymore

// selectors
const card = document.querySelector(".card");
const container = document.querySelector(".container");
// items
const title = document.querySelector(".title");
const text = document.querySelector(".description");
const sizes = document.querySelector(".sizes");
const img = document.querySelector("img");

// functions to animate

// event listener
// get e.pageX, e.pageY to get cursor position
card.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});

// begin animation
card.addEventListener("mouseenter", (e) => {
	card.style.transition = "none";
	// Popout
	title.style.transform = "translateZ(100px)";
	img.style.transform = "translateZ(100px) ";
	// add rotateZ(-45deg) for another effect
	sizes.style.transform = "translateZ(100px)";
	text.style.transform = "translateZ(100px)";
});

// reset card to original position when mouse leaves
card.addEventListener("mouseleave", (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	// popback
	title.style.transform = "translateZ(0px)";
	img.style.transform = "translateZ(0px)";
	sizes.style.transform = "translateZ(0px)";
	text.style.transform = "translateZ(0px)";
});

// look up how to use gsap to animate
// END Dev Ed -- card animation
