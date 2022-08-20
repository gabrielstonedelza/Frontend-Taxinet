<script>
	export let latestData;
</script>

<section class="latestcontainer">
	{#each latestData as data}
		<a sveltekit:prefetch sveltekit:noscroll href={"/schedule/" + data.slug}>
			<div class="latestcontainer1">
				<h3>{data.schedule_title}</h3>
				<small>{data.time_scheduled.slice(0, 8)}</small>
				<span>|</span>
				<small>{data.date_scheduled}</small>
				<!-- <hr /> -->
			</div>
		</a>
	{/each}
</section>
