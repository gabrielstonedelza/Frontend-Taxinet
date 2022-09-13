<script>
	export let inventoryDate;
	import DateCard from './DateCard.svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	class="passengers-lists-container"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	{#each inventoryDate as inventory}
		<div class="box">
			<DateCard {inventory} />
		</div>
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
