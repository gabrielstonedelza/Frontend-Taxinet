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
	}
</script>

<script>
	export let schedules;
	import ScheduleList from '../components/ScheduleCard/ScheduleList.svelte';
	import DashboardHeader from '../components/DashboardHeader.svelte';
    import Header from '../components/Header.svelte';
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
		<ScheduleList schedulelists={schedules} />
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
