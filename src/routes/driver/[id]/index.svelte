<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/get_drivers_profile/${params.id}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const detailDriver = await res.json();
        

		if (res.ok) {
			return {
				props: {
					detailDriver
				}
			};
		}
		return detailDriver;
	}
</script>

<script>
	export let detailDriver;
	import { fly } from 'svelte/transition';
	import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
	import globalcss from '../../../styles/global.css';
	import UpdatePassenger from '../../../components/UpdatePassenger.svelte';
	let isUpdatePage = false;
    console.log(detailDriver)


	const openUpdatePage = () => {
		isUpdatePage = true;
	};
	const closeUpdatePage = () => {
		isUpdatePage = false;
	};
</script>

<svelte:head>
	<title>Taxinet | {detailDriver.username}</title>
</svelte:head>
<DashboardHeader />

<section class="passenger-detail-container">
	{#if isUpdatePage}
		<UpdatePassenger detailId={detailDriver.id} user={detailDriver.user} {closeUpdatePage} />
	{/if}
	<div class="detailback">
		<div
			class="detail-container"
			in:fly={{ y: 50, duration: 500, delay: 500 }}
			out:fly={{ duration: 500 }}
		>
			<div class="box">
				<div class="image-container">
					<img src={detailDriver.driver_profile_pic} alt="" />
				</div>
				<div class="other-details">
					<span class="muted">Full Name</span>
					<h3>{detailDriver.get_drivers_full_name}</h3>
					<br />
					<span class="muted">Username</span>
					<h3>{detailDriver.username}</h3>
					<br />
					<span class="muted">Email</span>
					<h3>{detailDriver.get_drivers_email}</h3>
					<br />
					<span class="muted">Phone Number</span>
					<h3>{detailDriver.get_drivers_phone_number}</h3>
					<br />
					<span class="muted">Taxinet Number</span>
					<h3>{detailDriver.taxinet_number}</h3>
					<br />
					<span class="muted">Verified</span>
					<h3>{detailDriver.verified}</h3>
					<br />
					<!-- <button on:click={openUpdatePage}>Update</button> -->
				</div>
                <div class="other-details">
					<span class="muted">Car Model</span>
					<h3>{detailDriver.car_model}</h3>
					<br />
					<span class="muted">Car Name</span>
					<h3>{detailDriver.car_name}</h3>
					<br />
					<span class="muted">License Plate</span>
					<h3>{detailDriver.license_plate}</h3>
					<br />
					<span class="muted">License Number</span>
					<h3>{detailDriver.license_number}</h3>
					<br />
					<!-- <span class="muted">Taxinet Number</span>
					<h3>{detailDriver.taxinet_number}</h3>
					<br />
					<span class="muted">Verified</span>
					<h3>{detailDriver.verified}</h3> -->
					<br />
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
				grid-template-columns: 50% 25% 25%;
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
