<script context="module">
	
	export async function load({ fetch }) {
		const driversResponse = await fetch('https://taxinetghana.xyz/all_drivers_profile/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const driversData = await driversResponse.json();

		if (driversResponse.ok) {
			return {
				props: {
					driversData
				}
			};
		}
	}
</script>

<script>
	export let driversData;
	import DriversList from "../components/drivers/DriversLists.svelte"
	import DashboardHeader from '../components/DashboardHeader.svelte';
    import Header from '../components/Header.svelte';
    console.log(driversData)
</script>

<svelte:head>
	<title>Taxinet | Drivers</title>
</svelte:head>
<DashboardHeader />

<section
	class="all-schedules"
>
	<h3>All Drivers</h3>
	<div class="schedules-container">
		<DriversList {driversData} />
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.all-schedules{
		@include setLeftMargin;
		@include setBackground;
		margin-left: 260px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
		padding-top: 30px;
		h3{ 
			text-align: center;
			color: white;
			font-size: 30px;
		}
		.schedules-container{
			width: 50%;
		}
	}

</style>
