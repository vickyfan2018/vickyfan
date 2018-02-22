$(document).ready(function() {
	$('#fullpage').fadeIn();
			$('#fullpage').fullpage({
				sectionsColor: ['#03A6D7', '#03A6D7', '#03A6D7', '#03A6D7', '#ccddff'],
				anchors: ['1st', '2nd', '3rd', '4th', '5th'],
				menu: '#menu',
				scrollingSpeed: 1000,
				'navigation': false,
				'navigationPosition': 'none',
				'navigationTooltips': ['', '', '', '', 'lastPage'],
			});
function newpage_yes () {
window.location.href = "drag-on-book-success.html";
}
function newpage_no () {
window.location.href = "fail.html";
}
$('.use').click(function() {
event.preventDefault();
newLocation = this.href;
$('body').fadeOut(1000, newpage_yes);
});

$('.not-use').click(function() {
event.preventDefault();
newLocation = this.href;
$('body').fadeOut(1000, newpage_no);
});
    });

	