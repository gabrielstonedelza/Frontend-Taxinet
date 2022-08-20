<script>
	export let walletRequest;
</script>

<section class="latestcontainer">
	{#each walletRequest as data}
		<div class="latestcontainer1">
			<h3>{data.title}</h3>
			<h3>{data.get_amount}</h3>
			<small>{data.date_requested.slice(0, 8)}</small>
			<span>|</span>
			<small>{data.time_requested}</small>
			<!-- <hr /> -->
		</div>
	{/each}
</section>
