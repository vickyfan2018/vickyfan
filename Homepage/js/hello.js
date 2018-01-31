$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors: ['index', 'about', '3rd', 'work', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['Index', 'About', '', 'Work', 'lastPage'],
			});
		});