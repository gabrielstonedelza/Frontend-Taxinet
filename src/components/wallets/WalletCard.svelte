<script>
	export let wallet;
</script>

<div class="schedule-card">
	<a sveltekit:prefetch sveltekit:noscroll href={'/wallet/' + wallet.id}>
		<div class="card">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={wallet.get_passenger_profile_pic} alt="passengers profile picture" />
			<small>{wallet.get_passengers_name}</small>
			<br />
			<small>{wallet.get_amount}</small>
		</div>
	</a>
</div>

<style lang="scss">
	@import '../../styles/constant';
</style>
