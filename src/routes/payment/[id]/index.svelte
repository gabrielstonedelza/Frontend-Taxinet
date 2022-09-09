<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/admin_get_payment_detail/${params.id}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const detailPayment = await res.json();

		if (res.ok) {
			return {
				props: {
					detailPayment
				}
			};
		}
		return detailPayment;
	}
</script>

<script>
	export let detailPayment;
	import { fly } from 'svelte/transition';
	import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
	import globalcss from '../../../styles/global.css';

	

</script>

<svelte:head>
	<title>Taxinet | {detailPayment.get_drivers_full_name}</title>
</svelte:head>
<DashboardHeader />

<section class="passenger-detail-container">
	
	<div class="detailback">
		<div
			class="detail-container"
			in:fly={{ y: 50, duration: 500, delay: 500 }}
			out:fly={{ duration: 500 }}
		>
			<div class="box">
				<div class="image-container">
					<img src={detailPayment.get_driver_profile_pic} alt="" />
				</div>
				<div class="other-details">
					<span class="muted">Full Name</span>
					<h3>{detailPayment.get_drivers_full_name}</h3>
					<br />
					<span class="muted">Amount</span>
					<h3>{detailPayment.amount}</h3>
					<br />
					<span class="muted">Date paid</span>
					<h3>{detailPayment.date_paid}</h3>
					<br />
					<span class="muted">Time paid</span>
					<h3>{detailPayment.time_paid.slice(0,8)}</h3>
					<br />
					
					<!-- <button on:click={openUpdatePage}>Update</button> -->
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../../styles/constant';
	.detailback {
		@include setBackground;
		@include setLeftMargin;
		// margin-left: 260px;

		.detail-container {
            box-sizing: border-box;
			width: 70%;
			@include setGlass;
			.box {
                display: grid;
				gap: 1rem;
				grid-template-columns: 70% 30%;
				.image-container {
                    img {
                        width: 70%;
						height: 500px;
						border-radius: 10px;
						box-shadow: $box-shadow;
                        object-fit: cover;
					}
				}
				.other-details {
                    
                    
					.muted {
						color: rgb(191, 173, 173);
					}
					h3 {
                        
						text-transform: capitalize;
					}
					button {
						@include setGlass;
						cursor: pointer;
					}
				}
			}
		}
	}

    // media query
    
</style>
