<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/get_passenger_profile/${params.id}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const detailPassenger = await res.json();

		if (res.ok) {
			return {
				props: {
					detailPassenger
				}
			};
		}
		return detailPassenger;
	}
</script>

<script>
	export let detailPassenger;
	import { fly } from 'svelte/transition';
	import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
	import globalcss from '../../../styles/global.css';
	import UpdatePassenger from '../../../components/UpdatePassenger.svelte';
	let isUpdatePage = false;


	const openUpdatePage = () => {
		isUpdatePage = true;
	};
	const closeUpdatePage = () => {
		isUpdatePage = false;
	};
</script>

<svelte:head>
	<title>Taxinet | {detailPassenger.username}</title>
</svelte:head>
<DashboardHeader />

<section class="passenger-detail-container">
	{#if isUpdatePage}
		<UpdatePassenger detailId={detailPassenger.user}  {closeUpdatePage} />
	{/if}
	<div class="detailback">
		<div
			class="detail-container"
			in:fly={{ y: 50, duration: 500, delay: 500 }}
			out:fly={{ duration: 500 }}
		>
			<div class="box">
				<div class="image-container">
					<img src={detailPassenger.passenger_profile_pic} alt="" />
				</div>
				<div class="other-details">
					<span class="muted">Full Name</span>
					<h3>{detailPassenger.get_passengers_full_name}</h3>
					<br />
					<span class="muted">Username</span>
					<h3>{detailPassenger.username}</h3>
					<br />
					<span class="muted">Email</span>
					<h3>{detailPassenger.get_passengers_email}</h3>
					<br />
					<span class="muted">Phone Number</span>
					<h3>{detailPassenger.get_passengers_phone_number}</h3>
					<br />
					<span class="muted">Referral</span>
					<h3>{detailPassenger.referral}</h3>
					<br />
					<span class="muted">Verified</span>
					<h3>{detailPassenger.verified}</h3>
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
