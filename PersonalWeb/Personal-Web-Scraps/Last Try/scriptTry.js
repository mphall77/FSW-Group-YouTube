// selectors
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

const navLogo = document.querySelector("#navbar-logo");

// functions
// display mobile menu
const mobileMenu = () => {
	menu.classList.toggle("is-active");
	menuLinks.classList.toggle("active");
};

// show navbar when scrolling
const highlight = () => {
	const brightLink = document.querySelector(".highlight");
	const homeLink = document.querySelector("#home-page");
	const aboutLink = document.querySelector("#about-page");
	const projectsLink = document.querySelector("#projects-page");
	const contactLink = document.querySelector("#contact-page");
	let scrollPos = windows.scrollY;

	// add highlight class
	if (window.innerWidth > 960 && scrollPos < 600) {
		homeLink.classList.add("highlight");
		aboutLink.classList.remove("highlight");
		return;
	} else if (window.innerWidth > 960 && scrollPos < 1400) {
		aboutLink.classList.add("highlight");
		homeLink.classList.remove("highlight");
		projectsLink.classList.remove("highlight");
		contactLink.classList.remove("highlight");
		return;
	} else if (window.innerWidth > 960 && scrollPos < 2345) {
		projectsLink.classList.add("highlight");
		homeLink.classList.remove("highlight");
		aboutLink.classList.remove("highlight");
		contactLink.classList.remove("highlight");
		return;
	}
	if (
		(brightLink && window.innerWidth < 960 && scrollPos < 600) ||
		brightLink
	) {
		brightLink.classList.remove("highlight");
	}
};

// event Listeners
menu.addEventListener("click", mobileMenu);

window.addEventListener("scroll", highlight);
window.addEventListener("click", highlight);







// https://www.youtube.com/watch?v=3-2Pj5hxwrw
