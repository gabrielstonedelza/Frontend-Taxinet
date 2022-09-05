<script>
	export let schedule;
</script>

<div class="schedule-card">
	<a sveltekit:noscroll href={'/request_dates/' + schedule} class="scontainer">
		<div class="card">
			<small>{schedule}</small>
		</div>
	</a>
</div>

<style lang="scss">
	@import '../../styles/constant';
	.schedule-card {
		@include setGlass;
		.scontainer {
			display: flex;
			align-items: center;
			gap: 1rem;

			.card {
				small {
					color: white;
				}
			}
		}
	}
</style>
