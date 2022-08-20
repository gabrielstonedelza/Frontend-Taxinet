<script>
	export let schedulelists;
	import ScheduleCard from './ScheduleCard.svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="schedule-lists-container" in:fly={{ y: 50, duration: 500, delay: 500 }}
out:fly={{ duration: 500 }}>
	{#each schedulelists as schedule}
		<div class="box">
			<ScheduleCard {schedule} />
		</div>
	{/each}
</div>

<style lang="scss">
@import '../../styles/constant';
.schedule-lists-container{
	@include setGlass;
	.box{
		
	}
}

</style>