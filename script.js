let tabs = document.querySelectorAll(".nav__link");
let contents = document.querySelectorAll(".right-content");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		contents.forEach((content) => {
			content.classList.remove("active");
		});
		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});
		contents[index].classList.add("active");
		tabs[index].classList.add("active");
	});
});


