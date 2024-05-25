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

	// swiper
	var swiper = new Swiper(".mySwiper", {
		direction: "vertical",
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper(".mySwiper2", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper_next",
			prevEl: ".swiper_prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});

	// characteristics
	$(".all_chars").on("click", function (e) {
		$(".description .desc_item").addClass("active");
		$(this).slideUp(200);
	});

	// product calculator
	let pricePerUnit = parseFloat($(".total_price").text()); // Base price per unit
	let value = 1;

	function updatePrice() {
		$(".total_price").text(pricePerUnit * value + " руб");
	}

	$("#decrement").click(function () {
		if (value > 1) {
			value--;
			$("#value").text(value);
			updatePrice();
		}
	});

	$("#increment").click(function () {
		value++;
		$("#value").text(value);
		updatePrice();
	});

	updatePrice(); // Initial price update
});
