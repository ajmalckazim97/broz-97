// document.addEventListener("DOMContentLoaded", function () {


// 	const servicesMenu = document.querySelector(".sub-menu-li  .down-arrow-image");
// 	const submenu = document.querySelector(".sub-menu-li .submenu-ul");

// 	servicesMenu.addEventListener("click", function () {
// 		console.log("side menu keeri", submenu);
// 		submenu.style.display = submenu.style.display == "block" ? "none" : "block";
// 		servicesMenu.classList.toggle("rotate"); // Toggle rotation
// 	});
// });
document.addEventListener("DOMContentLoaded", function () {
	const subMenus = document.querySelectorAll(".sub-menu-li");

	subMenus.forEach((menuItem) => {
		const arrow = menuItem.querySelector(".down-arrow-image");
		const submenu = menuItem.querySelector(".submenu-ul");

		arrow.addEventListener("click", function () {
			submenu.style.display = submenu.style.display === "block" ? "none" : "block";

			arrow.classList.toggle("rotate");
		});
	});
});


document.addEventListener("DOMContentLoaded", function () {
	//   if (window.location.hostname == "localhost") {
	if (window.location.protocol !== "file:") {
		console.log("localhost alla");

		// Select all links
		document.querySelectorAll(".html-remove a").forEach(function (link) {
			let href = link.getAttribute("href");
			if (href && href.endsWith(".html")) {
				// Remove .html for live environment
				link.setAttribute("href", href.replace(".html", ""));
			}

			if (href && href.includes(".html")) {
				// Remove only the .html part, preserving fragments and query parameters
				link.setAttribute("href", href.replace(/\.html(?=[#?]|$)/, ""));

				//.console.log('keeri inner html');
				
			}
		});
	}
	else {
		console.log("local aanu");

	}

});