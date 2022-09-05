<script context="module">
	
	export async function load({ fetch }) {
		const passengerResponse = await fetch('https://taxinetghana.xyz/all_passengers_profile/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const passengerData = await passengerResponse.json();

		if (passengerResponse.ok) {
			return {
				props: {
					passengerData
				}
			};
		}
	}
</script>

<script>
	export let passengerData;
	import PassengerList from "../components/passengers/PassengersList.svelte"
	import DashboardHeader from '../components/DashboardHeader.svelte';
    import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Taxinet | Passengers</title>
</svelte:head>
<DashboardHeader />

<section
	class="all-schedules"
>
	<h3>All Passengers</h3>
	<div class="schedules-container">
		<PassengerList {passengerData} />
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.all-schedules{
		@include setLeftMargin;
		@include setBackground;
		// margin-left: 260px;
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
