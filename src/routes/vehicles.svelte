<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://taxinetghana.xyz/all_vehicles/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const vehicles = await res.json();

		if (res.ok) {
			return {
				props: {
					vehicles
				}
			};
		}
	}
</script>

<script>
	export let vehicles;
	import WalletList from '../components/wallets/WalletList.svelte';
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import addButton from '../assets/images/icons/add.png';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Taxinet | Vehicles</title>
</svelte:head>
<DashboardHeader />

<section class="vehicle-container">
	<div class="container" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
		<div class="addandheader">
			<h3>Vehicles</h3>
			<a sveltekit:prefetch sveltekit:noscroll href="/vehicleregistration">
				<img
					src={addButton}
					alt=""
					style="width:40px; height:40px;cursor:pointer;"
					title="Add to wallet"
				/>
			</a>
		</div>

		<div class="detailtable">
			<table class="styled-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Status</th>
						<th>Code Name</th>
						<th>Brand</th>
						<th>Model</th>
						<th>Year</th>
						<th>Licence Plate</th>
						<th>Color</th>
						<th>Reg certificate</th>
						<th>Taxi license</th>
						<th>Vin</th>
						<th>Transmission</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					{#each vehicles as vehicle}
						<tr>
							<td>
								{vehicle.id}
							</td>
							<td>
								{vehicle.status}
							</td>
							<td>
								{#if vehicle.code_name != ''}
									{vehicle.code_name}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.brand != ''}
									{vehicle.brand}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.model != ''}
									{vehicle.model}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.year != ''}
									{vehicle.year}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.license_plate_number != ''}
									{vehicle.license_plate_number}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.color != ''}
									{vehicle.color}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.registration_certificate_number != ''}
									{vehicle.registration_certificate_number}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.taxi_license_number != ''}
									{vehicle.taxi_license_number}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.vin != ''}
									{vehicle.vin}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.transmission != ''}
									{vehicle.transmission}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
							<td>
								{#if vehicle.category != ''}
									{vehicle.category}
								{:else}
									<p>N/A</p>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.vehicle-container {
		@include setBackground;
		@include setLeftMargin;
		padding-top: 20px;
		.addandheader {
			padding-bottom: 20px;
			display: flex;
			gap: 2rem;
			// justify-content: center;
			h3 {
				text-align: center;
				color: white;
				font-size: 30px;
			}
		}

		.detailtable {
			.styled-table {
				border-collapse: collapse;
				// margin: 18px;
				font-size: 1rem;
				font-family: sans-serif;
				min-width: 90%;
				font-weight: bold;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
				thead tr {
					background-color: #00987a4c;
					color: #ffffff;
					text-align: center;
				}
				th,
				td {
					padding: 10px;
					text-align: start;
				}
				tr {
					color: #ffffff;
					&:hover {
						color: #ffffff;
						background: rgba(255, 255, 255, 0.461);
					}
				}
				tbody tr {
					border-bottom: 1px solid #dddddd;
				}
			}
		}
	}
</style>
