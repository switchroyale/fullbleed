/* Fullbleed v1.0 */

$.fn.bodyvid = function(settings) {
	var defaults = {
		video : null,
		poster: null,
		sound: null
	};
	
	// Insert bodyvid HTML
	$('body').append('<div class="bodyvid-wrapper" style="width: 100%; height: 100%; position: fixed; left: 0; top: 0; right: 0; bottom: 20px; overflow: hidden; z-index: -999999"><video class="bodyvid" style="position: absolute; visibility: hidden; max-width: none; max-height: none;" src="' + settings.video + '" poster="' + settings.poster + '" autoplay loop ' + settings.sound + '></video></div>');
	
	function bodyvidsize() {
		// Window Dimensions
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var windowRatio = windowWidth/windowHeight;
		
		// Video Dimensions
		var videoWidth = 1920;
		var videoHeight = 1080;
		var videoRatio = 1920/1080;
		
		// Scale Video
		if (windowRatio < videoRatio) {
			$('.bodyvid').css({ 'width' : 'auto', 'height' : windowHeight+'px' })
			 var videoWidth = $('.bodyvid').width();
			 var videoHeight = $('.bodyvid').height();
		}
		
		else {
			$('.bodyvid').css({ 'width' : windowWidth+'px', 'height' : 'auto' })
			var videoWidth = $('.bodyvid').width();
			var videoHeight = $('.bodyvid').height();
		}
		
		// Center Video
		if (videoWidth > windowWidth) {
			var offset = (videoWidth - windowWidth) / 2;
			$('.bodyvid').css({ 'left' : '-' + offset + 'px', 'top' : '0' });
		}
		
		else {
			var offset = (videoHeight - windowHeight) / 2;
			$('.bodyvid').css({ 'left' : '0', 'top' : '-' + offset + 'px' });
		}
	}
	
	// Run bodyvid Function After Video Loads
	$('.bodyvid').on('loadedmetadata', function() {
	        bodyvidsize();
	        $('.bodyvid').css({ 'visibility' : 'visible' });
	    });
	
	// Run bodyvid Function on Window Resize
	$(window).on('resize', function() {
		bodyvidsize();
	});
};


$.fn.boxvid = function(settings) {
	var defaults = {
		target : null,
		video : null,
		poster: null,
		sound: null
	};
	
	// Insert boxvid HTML
	$(settings.target).prepend('<div class="boxvid-wrapper" style="width: 100%; height: 100%; position: absolute; left: 0; top: 0; right: 0; bottom: 20px; overflow: hidden;"><video class="boxvid" style="position: absolute; visibility: hidden; max-width: none; max-height: none;" src="' + settings.video + '" poster="' + settings.poster + '" autoplay loop ' + settings.sound + '></video></div>');
	
	function boxvidsize() {
		// Box Dimensions
		var boxWidth = $(settings.target + ' .boxvid-wrapper').parent().outerWidth();
		var boxHeight = $(settings.target + ' .boxvid-wrapper').parent().outerHeight();
		var boxRatio = boxWidth/boxHeight;
		
		// Video Dimensions
		var videoWidth = 1920;
		var videoHeight = 1080;
		var videoRatio = 1920/1080;
		
		// Scale Video
		if (boxRatio < videoRatio) {
			$(settings.target + ' .boxvid').css({ 'width' : 'auto', 'height' : boxHeight+'px' })
			 var videoWidth = $(settings.target + ' .boxvid').width();
			 var videoHeight = $(settings.target + ' .boxvid').height();
		}
		
		else {
			$(settings.target + ' .boxvid').css({ 'width' : boxWidth+'px', 'height' : 'auto' })
			var videoWidth = $(settings.target + ' .boxvid').width();
			var videoHeight = $(settings.target + ' .boxvid').height();
		}
		
		// Center Video
		if (videoWidth > boxWidth) {
			var offset = (videoWidth - boxWidth) / 2;
			$(settings.target + ' .boxvid').css({ 'left' : '-' + offset + 'px', 'top' : '0' });
		}
		
		else {
			var offset = (videoHeight - boxHeight) / 2;
			$(settings.target + ' .boxvid').css({ 'left' : '0', 'top' : '-' + offset + 'px' });
		}
	}
	
	// Run boxvid Function After Video Loads
	$(settings.target + ' .boxvid').on('loadedmetadata', function() {
		boxvidsize();
		$(settings.target + ' .boxvid').css({ 'visibility' : 'visible' });
	});
	
	// Run boxvid Function on Window Resize
	$(window).on('resize', function() {
		boxvidsize();
	});
};
