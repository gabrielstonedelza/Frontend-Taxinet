<script>
	import vid from '../assets/vids/Taxinet-Intro.mp4';
</script>

<section class="video-showcase">
	<video autoplay loop muted playsinline>
		<source src={vid} type="video/mp4" />
	</video>
	<div class="showcase-contents" />
</section>

<style lang="scss">
	.video-showcase {
		width: 100%;
		height: 100%;
        opacity: .8;
		video {
			width: 100%;
			height: 100%;
		}
	}
</style>
