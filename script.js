// blog
let blogTabs = document.querySelectorAll(".blog__item");
let blogContents = document.querySelectorAll(".blog__contents");

blogTabs.forEach((blogTab,i) => {
	blogTab.addEventListener("click", () => {
		blogContents.forEach((blogContent) => {
			blogContent.classList.remove("active");
		});
		blogTabs.forEach((blogTab) => {
			blogTab.classList.remove("active");
		});
		blogContents[i].classList.add("active");
		blogTabs[i].classList.add("active");
	});
});


// navbar
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


		// blog ilk sekmeye gelme
		blogContents.forEach((blogContent) => {
			blogContent.classList.remove("active");
		});
		blogTabs.forEach((blogTab) => {
			blogTab.classList.remove("active");
		});
		blogContents[0].classList.add("active");
		blogTabs[0].classList.add("active");
	});
});


// navbar
let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".home-page__left");

hamburger.addEventListener("click", function(){
    navigation.classList.toggle("toggle");
    //Hamburger Animation
    hamburger.classList.toggle("animation");
});

let navClose = document.querySelector(".home-page__right");
navClose.addEventListener("click", function(){
	navigation.classList.remove("toggle");
	//Hamburger Animation
	hamburger.classList.remove("animation");
});



// mobil navbar - scroll
let lastKnownScrollPosition = 0;


document.addEventListener('scroll', function(e) {
	lastKnownScrollPosition = window.scrollY;
	
	if (lastKnownScrollPosition > 70){
		hamburger.classList.add("scroll-close");
		hamburger.classList.remove("scroll-open");
	} else {
		hamburger.classList.remove("scroll-close");
		hamburger.classList.add("scroll-open");
	}
  });

