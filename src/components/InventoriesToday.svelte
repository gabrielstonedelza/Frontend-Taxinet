<script>
	export let todaysInventories;
</script>

<section class="latestcontainer">
	{#each todaysInventories as data}
		<a sveltekit:prefetch sveltekit:noscroll href={'/inventory/' + data.id}>
			<div class="latestcontainer1">
				<h3>{data.get_drivers_name}</h3>
				<small>{data.date_checked.slice(0, 8)}</small>
				<span>|</span>
				<small>{data.time_checked.slice(0, 8)}</small>
				<!-- <hr /> -->
			</div>
		</a>
	{/each}
</section>