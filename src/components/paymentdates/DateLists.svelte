<script>
	export let payment_dates;
	import DateCard from './DateCard.svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	class="passengers-lists-container"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	{#each payment_dates as payment}
		<div class="box">
			<DateCard {payment} />
		</div>
	{/each}
</div>


<style lang="scss">
	@import '../../styles/constant';
	.passengers-lists-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		justify-content:center;
		gap: 1rem;
		.box {
		}
	}
</style>