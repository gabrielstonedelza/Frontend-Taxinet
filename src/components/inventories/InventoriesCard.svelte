<script>
	export let inventory;
</script>

<div class="schedule-card">
	<a sveltekit:prefetch sveltekit:noscroll href={'/inventory_dates/' + inventory}>
		<div class="card">
			<div class="details">
				<small>{inventory}</small>
			</div>
		</div>
	</a>
</div>

<style lang="scss">
	@import '../../styles/constant';
	.schedule-card {
		.card {
			@include setGlass;
			box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
				rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
				rgba(0, 0, 0, 0.09) 0px 32px 16px;
			display: flex;
			// justify-content: center;
			// flex-direction: column;
			align-items: center;
			gap: 1rem;
			transition: all 300ms ease;
			img {
				width: 110px;
				height: 110px;
				object-fit: cover;
				border-radius: 50%;
				box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
					rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
					rgba(0, 0, 0, 0.09) 0px 32px 16px;
			}
			&:hover {
				box-shadow: none;
			}
			.details {
				small {
					font-weight: bold;
					font-size: 15px;
				}
			}
		}
	}
</style>
