# fullbleed.js
A script to add background videos to your site.

## Dependencies
This script requires jQuery to function.

## Examples
Website background video:

```javascript
<script type="text/javascript">
	$(document).ready(function() {
		$('html').bodyvid({
			video: 'video.mp4',
			poster: 'poster.jpg',
			sound: 'muted' // Optional
		});
	});
</script>
```
Background video for a `div` or similar element:

```javascript
<script type="text/javascript">
	$(document).ready(function() {
		$('html.desktop').boxvid({
			target: '.your-target-element',
			video: 'http://www.example.com/video.mp4',
			poster: 'http://www.example.com/poster.jpg',
			sound : 'muted' // Optional
		});
	});
</script>
```
