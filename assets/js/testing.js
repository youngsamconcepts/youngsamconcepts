function loadExternalContent(url) {
	$('#temp-content').load(url, function() {
		$('#content').html($('#temp-content').html());
		$('#temp-content').empty();
	});
}

$('#content').on('click', 'a', function(e) {
	e.preventDefault();
	const url = $(this).attr('href');
	loadExternalContent(url);
})

$(window).on('beforeload', function() {
	$('#temp-content').empty();
});












/*


$('#external-link-frame').hide();

function openExternalLin() {
	const externalLinksFrame = document.querySelector('#external-link-frame iframe');
	const externalLinksPageTitle = document.querySelector('#external-link-frame #site-title');

	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'A' && e.target.id === 'external-link') {
			$('#external-link-frame').show()
			$('#external-link-frame').fadeIn()
			

			const href = e.target.href;
			externalLinksFrame.src = href;
			externalLinksPageTitle.innerHTML = href;
			localStorage.setItem('iframeSrc', href);
		}

		if (e.target.id === 'close-iframe') {
			//externalLinksFrame.parentElement.classList.add('d-none')
			$('#external-link-frame').hide()
			$('#external-link-frame').fadeOut()
		}
	});
	console.log(window);
}





var openExternalLink = function(a) {
	$('#external-link-frame').fadeIn(50);
	$('#site-title').text(a.href);
	$('#link-frame').src = $('#site-title').text();

	localStorage.setItem('iframeSrc', $('#site-title').text());

	console.log(window)
}





$(document).ready(function() {


/*
	// Open iframe when a link with id="external-link" is clicked
	$('a').click(function() {
		if (this.id === 'external-link') {
			openExternalLink(this);
		}
	});
/*
	var storedSrc = localStorage.getItem('iframeSrc');
	if (storedSrc) {

	}

	
	// Check if src value is stored in the localStorage
	const storedSrc = localStorage.getItem('iframeSrc');

	if (storedSrc) {
		externalLinksFrame.src = storedSrc;
		externalLinksPageTitle.innerHTML = storedSrc;
		externalLinksFrame.parentElement.style.display = 'block';
	}

	*

	// Close the iframe
	$('#close-iframe').click(function() {
		$('#external-link-frame').fadeOut(100);
		localStorage.removeItem('iframeSrc');
		console.log(window)
	});

});
*/