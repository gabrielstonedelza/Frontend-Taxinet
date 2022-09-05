<script>
	export let requestD;
</script>

<div class="schedule-card">
	<a sveltekit:prefetch sveltekit:noscroll href={'/schedule/' + requestD.slug} >
		<div class="card">
            <img src={requestD.get_passenger_profile_pic} alt="" />
            <div class="details">
                <div class="header-read-status">
                    <h3>{requestD.schedule_title}</h3>
                    {#if requestD.read == 'Read'}
                        <small>{requestD.read}</small>
                    {:else}
                        <small class="notread">{requestD.read}</small>
                    {/if}
                </div>
                <small>{requestD.time_scheduled.slice(0, 8)}</small>
                <span>|</span>
                <small>{requestD.date_scheduled}</small>
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
				width: 50px;
				height: 50px;
				object-fit: fill;
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
