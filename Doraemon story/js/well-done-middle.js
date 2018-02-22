$(document).ready(function() {
$('body').fadeIn();
function newpage () {
window.location.href = "mum.html";
}

	

$('.action-button').click(function() {
event.preventDefault();
newLocation = this.href;
$('body').fadeOut(1000, newpage);
});

		});
