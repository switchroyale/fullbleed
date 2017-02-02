# fullbleed.js
A script to add background videos to your site.

## Dependencies
This script requires jQuery to function.

## Video Aspect Ratio
The script is setup for videos that are setup with an aspect ratio of 16:9 to scale properly.

## Setup
Link to jQuery and fullbleed.js:

```html
<script src="jquery.js"></script>
<script src="fullbleed.js"></script>
```

## Examples
Website background video:

```javascript
<script>
	$(document).ready(function() {
		$('html').bodyvid({
			video: 'video.mp4',
			poster: 'poster.jpg',
			sound: 'muted' // Optional
		});
	});
</script>
```
Background video for a `<div class="your-target-element"></div>` or similar element:

```javascript
<script>
	$(document).ready(function() {
		$('html').boxvid({
			target: '.your-target-element',
			video: 'video.mp4',
			poster: 'poster.jpg',
			sound : 'muted' // Optional
		});
	});
</script>
```
