// A $( document ).ready() block.
$( document ).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Responsive-Nav
	var nav = responsiveNav(".nav-collapse");

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

});

const images = $('.slideImgs');
showSlides = (index) => location.href = $(images.get(index)).children('img').attr('src');
