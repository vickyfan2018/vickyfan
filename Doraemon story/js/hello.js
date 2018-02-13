$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['white', 'white', '#03A6D7', '#03A6D7', '#ccddff'],
				anchors: ['index', 'about', '3rd', 'work', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['', '', '', '', 'lastPage'],
			});
		});