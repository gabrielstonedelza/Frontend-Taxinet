<script>
	export let requestDates;
	import ScheduleCard from './ScheduleCard.svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	class="schedule-lists-container"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	{#each requestDates as schedule}
		<div class="box">
			<ScheduleCard {schedule} />
			<br />
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../../styles/constant';
	.schedule-lists-container {
		// @include setGlass;
		
		.box {
			// display: flex;
		}
	}
</style>
