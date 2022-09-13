<script>
	export let driversData;
	import DriverCard from "../drivers/DriversCard.svelte"
	import { fly } from 'svelte/transition';
</script>

<div
	class="passengers-lists-container"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	{#each driversData as driver}
		{#if driver.get_user_type == 'Driver'}
			<div class="box">
				<DriverCard {driver} />
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	@import '../../styles/constant';
	.passengers-lists-container {
		padding-left: 20px;
		padding-right: 30px;
		width: 90%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		.box {
		}
	}
</style>
