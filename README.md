# fullbleed.js
A script to add background videos to your site.

## Dependencies
This script required jQuery to function.

## Examples
Website background video:

```javascript
$('html').bodyvid({
	video: 'video.mp4',
	poster: 'poster.jpg',
	sound: 'muted' // Optional
});
```
Background video for a `div` or similar element:

```javascript
$('html.desktop').boxvid({
	target: '.your-target-element',
	video: 'http://www.example.com/video.mp4',
	poster: 'http://www.example.com/poster.jpg',
	sound : 'muted' // Optional
});
```
