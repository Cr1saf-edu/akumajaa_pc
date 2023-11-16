var autoTransitionInterval;

function nextPage() {
	var current = $(".page.active");
	var findNext = $(current).next(".page");

	$(current).removeClass("active");

	setTimeout(function () {
		if ($(findNext).length) {
			$(findNext).addClass("active");
		} else {
			$(".page:first").addClass("active");
		}
	}, 400);
}

function prevPage() {
	var current = $(".page.active");
	var findPrev = $(current).prev(".page");

	$(current).removeClass("active");

	setTimeout(function () {
		$(findPrev).addClass("active");
	}, 400);
}

function startAutoTransition() {
	autoTransitionInterval = setInterval(function () {
		nextPage();
	}, 5000);
}

function stopAutoTransition() {
	clearInterval(autoTransitionInterval);
}

$('.js-next').on('click', function () {
	stopAutoTransition();
	nextPage();
});

$('.js-prev').on('click', function () {
	prevPage();
});

$('.js-back-to-1').on('click', function () {
	var current = $('.page.active');
	$(current).removeClass('active');
	setTimeout(function () {
		$('.page-cover').addClass("active");
	}, 400);
});

$('.js-auto-transition').on('click', function (e) {
	e.preventDefault();
	stopAutoTransition();
	startAutoTransition();
});

$('.page').on('click', function() {
    stopAutoTransition();
});

$(document).on("keydown", function (e) {
	switch (e.which) {
		case 37: // Izquierda
			prevPage();
			break;

		case 39: // Derecha
			stopAutoTransition();
			nextPage();
			break;

		case 13: // Enter
			startAutoTransition();
			break;

		case 27: // Esc
			prevPage();
			break;

		default:
			return;
	}

	e.preventDefault();
});