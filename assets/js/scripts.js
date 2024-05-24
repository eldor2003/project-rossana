$(document).ready(function () {
	// hamburger
	$(".hamurger_menu").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").removeClass("active");
	});

	// header language
	const languageButton = document.querySelector(".language-button");
	const languageDropdown = document.querySelector(".language-dropdown");
	const languageOptions = document.querySelectorAll(".language-option");
	const languageCode = document.querySelector(".language-code");

	languageButton.addEventListener("click", () => {
		languageDropdown.style.display =
			languageDropdown.style.display === "block" ? "none" : "block";
	});

	languageOptions.forEach((option) => {
		option.addEventListener("click", () => {
			const selectedLang = option.getAttribute("data-lang");
			languageCode.textContent = selectedLang.toUpperCase();
			languageDropdown.style.display = "none";
			changeLanguage(selectedLang);
		});
	});

	document.addEventListener("click", (event) => {
		if (!languageButton.contains(event.target)) {
			languageDropdown.style.display = "none";
		}
	});

	function changeLanguage(lang) {
		const baseUrl = window.location.origin;
		const currentPath = window.location.pathname;
		const newUrl = `${baseUrl}/${lang}${currentPath}`;

		// Redirect to the new URL
		window.location.href = newUrl;
	}
});
