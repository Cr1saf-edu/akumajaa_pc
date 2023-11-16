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
	}, 200);
}

function prevPage() {
	var current = $(".page.active");
	var findPrev = $(current).prev(".page");

	$(current).removeClass("active");

	setTimeout(function () {
		$(findPrev).addClass("active");
	}, 200);
}

$('.js-next').on('click', function () {
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