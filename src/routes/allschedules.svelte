<script context="module">
	
	export async function load({ fetch }) {
		const res = await fetch('https://taxinetghana.xyz/admin_get_all_requests/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			}
		});
		const schedules = await res.json();

		if (res.ok) {
			return {
				props: {
					schedules
				}
			};
		}

		return {
			status: res.status,
			error: new Error("Network Error ")
		}
	}
</script>

<script>
	export let schedules;
	import ScheduleList from '../components/ScheduleCard/ScheduleList.svelte';
	import DashboardHeader from '../components/DashboardHeader.svelte';
    import Header from '../components/Header.svelte';
	let requestDates = [];
	import { fly } from 'svelte/transition';

	schedules.forEach((element) => {
		if (!requestDates.includes(element['date_scheduled']))
			requestDates.push(element['date_scheduled']);
	});
</script>

<svelte:head>
	<title>Taxinet | Schedules</title>
</svelte:head>
<DashboardHeader />

<section
	class="all-schedules"
>
	<h3>All schedules</h3>
	<div class="schedules-container">
		<ScheduleList {requestDates} />
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
		// width: 90%;
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
