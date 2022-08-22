<script>
	export let walletRequest;
</script>

<section class="latestcontainer">
	{#each walletRequest as data}
		{#if data.read == 'Not Read'}
			<a sveltekit:noscroll href={'/loadwallet/' + data.id}>
				<div class="latestcontainer1">
					<h3>{data.title}</h3>
					<small>{data.date_requested.slice(0, 10)}</small>
					<span>|</span>
					<small>{data.time_requested}</small>
					<!-- <hr /> -->
				</div>
			</a>
		{/if}
	{/each}
</section>

<style lang="scss">
	.latestcontainer {
		// background: rgba(128, 128, 128, 0.403);
		border-radius: 10px;
		// padding: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
		.latestcontainer1 {
			h3 {
				color: white;
				text-transform: capitalize;
			}
			small {
				color: rgb(194, 191, 191);
			}
			span {
				color: rgb(194, 191, 191);
				padding-left: 10px;
				padding-right: 10px;
			}
			cursor: pointer;
			padding-bottom: 10px;
		}
	}
</style>
