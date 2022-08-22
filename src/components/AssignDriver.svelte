<script>
	import { fly } from 'svelte/transition';

	export let allDrivers;
	export let closeAssignPage;
	export let allAssignedDrivers;
	export let schedules;
	export let detailId;
	export let slug;
	export let passenger;
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import Spinner from '../components/Spinner.svelte';
	import like from '../assets/images/icons/like.png';

	let isPosting = false;
	let isAssigned = false;
	let isUnAssigned = false;
	let assignedMessage = '';
	let unAssignedMessage = '';

	const handleAddToAssignedDrivers = async (driverId) => {
		isPosting = true;
		setTimeout(function () {
			isPosting = false;
		}, 1500);
		const apiUrl = `https://taxinetghana.xyz/admin_assign_request_to_driver/`;
		axios({
			method: 'POST',
			url: apiUrl,
			data: {
				driver: driverId,
				ride: detailId
			},
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				isAssigned = true;
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const handleAssignToDriver = async (driverId) => {
		isPosting = true;
		setTimeout(function () {
			isPosting = false;
		}, 1500);
		handleAddToAssignedDrivers(driverId);
		const apiUrl = `https://taxinetghana.xyz/admin_update_requested_ride/${slug}/`;
		axios({
			method: 'PUT',
			url: apiUrl,
			data: {
				assigned_driver: driverId,
				ride: detailId,
				passenger: passenger
			},
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				isAssigned = true;
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const handleUnAssignToDriver = async () => {
		isPosting = true;
		setTimeout(function () {
			isPosting = false;
		}, 900);
		const apiUrl = `https://taxinetghana.xyz/admin_update_requested_ride/${slug}/`;
		axios({
			method: 'PUT',
			url: apiUrl,
			data: {
				assigned_driver: 1,
				ride: detailId,
				passenger: passenger
			},
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				isUnAssigned = true;
				unAssignedMessage = 'Driver was unassigned.This will take a minute to kick in.';
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
</script>

<div class="mainformbox">
	<section
		class="assigndriver"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
		out:fly={{ duration: 500 }}
	>
		<p class="close" on:click={closeAssignPage} title="close users">X</p>
		{#if isUnAssigned}
			<p
				class="unassignmessage"
				in:fly={{ y: 50, duration: 500, delay: 500 }}
				out:fly={{ duration: 500 }}
			>
				{unAssignedMessage}
			</p>
		{/if}
		<br />
		<div class="drivers-box">
			{#each allDrivers as driver}
				{#each schedules as schedule}
					<div class="dbox">
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img src={driver.driver_profile_pic} alt="drivers profile picture" />
						<h3>{driver.get_drivers_full_name}</h3>

						{#if schedule.assigned_driver == driver.user}
							<div class="switch-class">
								<p class="already_assigned_text">Already assigned</p>
								<button on:click={handleUnAssignToDriver} class="unassignbutton">Unassign</button>
							</div>
						{:else if isAssigned}
							<img src={like} alt="" style="width: 30px;height:30px;" />
						{:else}
							<button on:click={handleAssignToDriver(driver.user)}>Assign</button>
						{/if}
					</div>
				{/each}
			{/each}
		</div>
	</section>
</div>

<style lang="scss">
	@import '../styles/constant';
	.mainformbox {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 1000;
		display: flex;
		justify-content: center;
		// align-items: center;
		gap: 1rem;
		padding: 20px;

		.assigndriver {
			padding: 20px;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			p.close {
				color: $main-color;
				position: fixed;
				cursor: pointer;
				font-size: 25px;
				z-index: 1;
				border: solid 2px $main-color;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				text-align: center;
				margin-left: -50px;
				transition: 1s ease;
				&:hover {
					transform: rotate(360deg);
					border: solid 2px red;
					color: red;
				}
			}
			p.unassignmessage {
				color: $main-color;
				font-size: 18px;
			}
			.drivers-box {
				display: flex;
				gap: 1rem;
				justify-content: center;
				align-items: center;

				.dbox {
					@include setGlass;
					width: 200px;
					height: 200px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					img {
						width: 80px;
						height: 80px;
						border-radius: 50%;
					}
					h3 {
						color: white;
						padding-top: 10px;
						padding-bottom: 10px;
					}
					button {
						display: black;

						padding: 0.75rem 2rem;
						background: $clr-primary-dark;
						border-radius: 0.5rem;
						outline: none;
						border: none;
						cursor: pointer;
						transition: 1s ease-in;
						color: #ffc700;
						&:hover {
							background-color: $clr-primary;
							color: black;
						}
					}
					.switch-class {
						.unassignbutton {
							display: none;
						}
						p.already_assigned_text {
							color: red;
							cursor: pointer;
							font-weight: bold;
						}
						&:hover {
							.unassignbutton {
								display: flex;
							}
							p.already_assigned_text {
								display: none;
							}
						}
					}
				}
			}
		}
	}

	// media query
</style>
