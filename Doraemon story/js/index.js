$(document).ready(function() {
	$('#fullpage').fadeIn();
			$('#fullpage').fullpage({
				sectionsColor: ['white', 'white', 'white', '#03A6D7', '#ccddff'],
				anchors: ['1st', '2nd', '3rd', '4th', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['', '', '', '', 'lastPage'],
			});

			function newpage_yes () {
window.location.href = "introcopyingtoast.html";
}
function newpage_no () {
window.location.href = "fail.html";
}
$('.fadeout-yes').click(function() {
event.preventDefault();
newLocation = this.href;
$('body').fadeOut(1000, newpage_yes);
});

$('.fadeout-no').click(function() {
event.preventDefault();
newLocation = this.href;
$('body').fadeOut(1000, newpage_no);
});

		});
