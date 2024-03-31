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
for (i = 0; i < images.length; i++) {
  $(images[i]).attr("onclick","showImage(this)");
}
showImage = (element) => location.href = $(element).children('img').attr('src');
