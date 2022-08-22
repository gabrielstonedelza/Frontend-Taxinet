<script>
	import { fly } from 'svelte/transition';
	import VideoShowcase from '../components/HomeShowcase.svelte';
	import AboutScheduling from '../components/Aboutscheduling.svelte';
	import FooterContact from '../components/FooterContact.svelte';
	import Header from '../components/Header.svelte';
    
</script>

<svelte:head>
	<title>Taxinet | Home</title>
</svelte:head>

<Header />
<section class="home" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<VideoShowcase />
	<AboutScheduling />
	<FooterContact />
</section>

<style lang="scss">
</style>
