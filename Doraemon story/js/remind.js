$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#03A6D7', '#03A6D7', '#03A6D7', '#03A6D7', '#ccddff'],
				anchors: ['index', 'about', '3rd', 'work', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
				'navigation': false,
				'navigationPosition': 'none',
				'navigationTooltips': ['', '', '', '', 'lastPage'],
			});
		});