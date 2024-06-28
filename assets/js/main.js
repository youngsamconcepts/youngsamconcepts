/*
  NAVBAR BACKGROUND EFFECT
  ************************
*/
/*
const headerEffect = function () {
  if (window.scrollY > $('#main-header').outerHeight()) {
    $('#main-nav').addClass('bg-light');
    //$('.navbar-toggler').attr('data-bs-theme', 'light');
  } else {
    $('#main-nav').removeClass('bg-light');
    //$('.navbar-toggler').attr('data-bs-theme', 'dark');
  } 
}
//$(document).ready(headerEffect);
//$(window).scroll(headerEffect);
*/
/*
  BACK TO TOP
  ***********
*/
$(document).ready(function() {
  $('#back-to-top').click(function() {
    window.scrollTo ({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });  
});

/*
  OPEN EXTERNAL LINKS ON THE WEBSITE
  **********************************
*/
const iframeWrapperSelector = '#external-link-iframe-wrapper';
const iframeSelector = '#external-link-iframe';
const iframeTitleSelector = '#site-title';
const closeIframeSelector =  'close-iframe'
const externalLinkSelector =  'external-link'

// Function - Show iframe
const showIframe = function (src) {
  const iframeWrapper = $(iframeWrapperSelector);
  const iframeTitle = $(iframeTitleSelector);
  const iframe = $(iframeSelector);

  iframeWrapper.fadeIn(50);
  iframeTitle.text(src);
  iframe.attr('src', iframeTitle.text());
  $('body').css({'overflow': 'hidden'});
}

// Function - Hide iframe
const hideIframe = function () {
  const iframeWrapper = $(iframeWrapperSelector);
  iframeWrapper.fadeOut(100);
  $('body').css({'overflow': 'auto'});
}
$(document).ready(function() {
  // Hide iframe by default
  hideIframe();
  $('a').click(function(e) {
    if (e.target.id === 'external-link') {
      e.preventDefault();
      showIframe(e.target.href);
    }
  });
  $('#' + closeIframeSelector).click(function(e) {
    hideIframe();
  });
});


// Helper Function - Filter Items //
function filterItems(btn, itemElement) {
  $(btn).click(function(e) {
    const currentBtn = e.target;
    const filter = currentBtn.dataset.filter;
    $(currentBtn).addClass('active');
    $(currentBtn).siblings().removeClass('active');
    for (let i = 0; i < itemElement.length; i++) {
      if (filter === 'all') {
        items[i].style.display = 'block';
      } else if(itemElement[i].classList.contains(filter)) {
        itemElement[i].style.display = 'block';
      } else {
        itemElement[i].style.display = 'none';
        $('#port-unavailable').removeClass('d-none')
      }
    }
  });
}

// FILTER THE PORTFOLIOS //
const items = $('.work');
filterBtn = $('.port-filter-btn');
filterItems(filterBtn, items);