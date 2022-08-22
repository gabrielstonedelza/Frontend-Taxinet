<script>
	export let schedule;
</script>

<div class="schedule-card">
	<a  sveltekit:noscroll href={'/schedule/' + schedule.slug}>
		<div class="card">
			<div class="header-read-status">
				<h3>{schedule.schedule_title}</h3>
				{#if schedule.read == 'Read'}
					<small>{schedule.read}</small>
				{:else}
					<small class="notread">{schedule.read}</small>
				{/if}
			</div>

			<small>{schedule.time_scheduled.slice(0, 8)}</small>
			<span>|</span>
			<small>{schedule.date_scheduled}</small>
			<br />
			<small>{schedule.status}</small>
		</div>
	</a>
</div>

<style lang="scss">
	@import '../../styles/constant';
	.schedule-card {
		.card {
			.header-read-status {
				display: flex;
				align-items: center;
				justify-content: space-between;
				small {
					color: $main-color;
					font-weight: bold;
					font-size: 20px;
				}
				.notread{
					color: Red;
					font-weight: bold;
					font-size: 20px;
				}
			}
			h3 {
				color: white;
			}
			p {
				color: white;
			}
			small {
				color: white;
			}
			span {
				color: white;
			}
		}
	}
</style>
