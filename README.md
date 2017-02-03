# fullbleed.js
A script to add full screen background videos to your site or HTML elements.

## Dependencies
This script requires jQuery to function.

## Video Aspect Ratio
The script is setup for videos that have an aspect ratio of 16:9 to scale properly. If a video with a different aspect ratio is being used, the video dimensions will have to be altered in the fullbleed.js file.

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
Background video for a `<div class="your-target-element"></div>` or similar HTML element:

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

## Additional CSS

When adding a background video to a `<div>` or similar HTML element, the element needs to have it's position (and the position of it's contents) set with CSS (relative, absolute, etc.):

```html
<div class="your-target-element">
	<div class="your-target-element-content">
		Your Content...
	</div>
</div>
```

```css
<style>
	.your-target-element,
	.your-target-element-content {
		position: relative;
	}
</style>
```
