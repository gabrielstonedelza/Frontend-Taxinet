<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/admin_request_detail/${params.slug}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const scheduleDetail = await res.json();

		const response = await fetch(`https://taxinetghana.xyz/all_drivers_profile/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const allDrivers = await response.json();

		const assignedDriers = await fetch(`https://taxinetghana.xyz/admin_get_all_assigned_drivers/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const allAssignedDrivers = await assignedDriers.json();

		const allScheduledRequests = await fetch('https://taxinetghana.xyz/admin_get_all_requests/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			}
		});
		const schedules = await allScheduledRequests.json();

		if (res.ok && response.ok && assignedDriers.ok && allScheduledRequests) {
			return {
				props: {
					scheduleDetail,
					allDrivers,
					allAssignedDrivers,schedules
				}
			};
		}
		return scheduleDetail;
	}
</script>

<script>
	export let scheduleDetail;
	export let allDrivers;
	export let allAssignedDrivers;
	export let schedules
	import { fly } from 'svelte/transition';
	import RequestDetail from '../../components/RequestDetail.svelte';
</script>

<svelte:head>
	<title>Taxinet | {scheduleDetail.schedule_title}</title>
</svelte:head>

<section>
	<RequestDetail
		poster={scheduleDetail.get_passenger_profile_pic}
		pName={scheduleDetail.get_passenger_name}
		title={scheduleDetail.schedule_title}
		sType={scheduleDetail.schedule_type}
		sPriority={scheduleDetail.schedule_priority}
		rType={scheduleDetail.ride_type}
		pLoc={scheduleDetail.pickup_location}
		dLoc={scheduleDetail.drop_off_location}
		pTime={scheduleDetail.pick_up_time}
		sDate={scheduleDetail.start_date}
		sStatus={scheduleDetail.status}
		dSchedules={scheduleDetail.date_scheduled}
		agreedPrice={scheduleDetail.price}
		initPrice={scheduleDetail.initial_payment}
		tScheduled={scheduleDetail.time_scheduled}
		sDescription={scheduleDetail.schedule_description}
		slug={scheduleDetail.slug}
		passenger={scheduleDetail.passenger}
		detailId={scheduleDetail.id}
		{allDrivers}
		{allAssignedDrivers}
		{schedules}
	/>
</section>
