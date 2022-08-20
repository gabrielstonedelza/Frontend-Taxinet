<script context="module">
	
	export async function load({ fetch }) {
		const res = await fetch('https://taxinetghana.xyz/admin_get_all_drivers_inventories/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			}
		});
		const driversInventories = await res.json();

		if (res.ok) {
			return {
				props: {
					driversInventories
				}
			};
		}
	}
</script>

<script>
	export let driversInventories;
	import InventoriesList from "../components/inventories/InventoriesList.svelte"
	import DashboardHeader from '../components/DashboardHeader.svelte';
    import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Taxinet | Inventories</title>
</svelte:head>
<DashboardHeader />

<section
	class="all-schedules"
>
	<h3>Drivers Inventories</h3>
	<div class="schedules-container">
		<InventoriesList {driversInventories} />
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
