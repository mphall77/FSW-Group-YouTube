const burgerSlide = () => {
	const burger = document.querySelector(".burger");
	const links = document.querySelector("#nav-links");

	burger.addEventListener("click", (e) => {
        links.classList.toggle("nav-active");
       
	});
};
burgerSlide();
