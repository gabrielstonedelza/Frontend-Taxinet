<script>
	export let inventory;
</script>

<div class="schedule-card">
	<a sveltekit:prefetch sveltekit:noscroll href={'/inventory/' + inventory.id}>
		<div class="card">
			<img src={inventory.get_driver_profile_pic} alt="drivers profile picture" />
			<small>{inventory.date_checked}</small>
			<br />
			<small>{inventory.time_checked}</small>
		</div>
	</a>
</div>

<style lang="scss">
	@import '../../styles/constant';
</style>
