<script>
	export let walletRequest;
</script>

<section class="latestcontainer">
	{#each walletRequest as data}
		{#if data.read == 'Not Read'}
			<a sveltekit:noscroll href={'/loadwallet/' + data.id} class="scontainer">
				<img src={data.get_passenger_profile_pic} alt="">
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
	@import "../styles/constant";
	.latestcontainer {
		// background: rgba(128, 128, 128, 0.403);
		border-radius: 10px;
		// padding: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
		.scontainer{
			display: flex;
			gap: 1rem;
			img{
				width: 50px;
				height: 50px;
				border-radius: 50%;
				box-shadow: $box-shadow;
				object-fit: cover;
			}
		}
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
