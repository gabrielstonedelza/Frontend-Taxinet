<script context="module">
	export async function load({ fetch }) {
		const passengerResponse = await fetch('https://taxinetghana.xyz/all_passengers/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const passengerData = await passengerResponse.json();
		// drivers data

		const driverResponse = await fetch('https://taxinetghana.xyz/all_drivers/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const driverData = await driverResponse.json();

		// users data
		const usersResponse = await fetch('https://taxinetghana.xyz/all_users/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const usersData = await usersResponse.json();

		// investors data
		const investorsResponse = await fetch('https://taxinetghana.xyz/all_investors/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const investorsData = await investorsResponse.json();

		// pending Requests
		const pendingRequests = await fetch('https://taxinetghana.xyz/admin_get_pending_schedules/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const pendingData = await pendingRequests.json();

		// reviewing Requests
		const reviewingRequests = await fetch(
			'https://taxinetghana.xyz/admin_get_reviewing_schedules/',
			{
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				}
			}
		);
		const reviewingData = await reviewingRequests.json();

		// active Requests
		const activeRequests = await fetch('https://taxinetghana.xyz/admin_get_active_schedules/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const activeData = await activeRequests.json();

		// cancelled Requests
		const cancelledRequests = await fetch(
			'https://taxinetghana.xyz/admin_get_cancelled_schedules/',
			{
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				}
			}
		);
		const cancelledData = await cancelledRequests.json();

		// onetime Requests
		const onetimeRequests = await fetch(
			'https://taxinetghana.xyz/admin_get_scheduled_for_one_time/',
			{
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				}
			}
		);
		const onetimeData = await onetimeRequests.json();

		// weekly Requests
		const weeklyRequests = await fetch('https://taxinetghana.xyz/admin_get_scheduled_for_weekly/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const weeklyData = await weeklyRequests.json();

		// days Requests
		const daysRequests = await fetch('https://taxinetghana.xyz/admin_get_scheduled_for_days/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const daysData = await daysRequests.json();

		// dayil Requests
		const dailyRequests = await fetch('https://taxinetghana.xyz/admin_get_scheduled_for_daily/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const dailyData = await dailyRequests.json();

		// latest five Requests
		const latestRequests = await fetch('https://taxinetghana.xyz/admin_get_five_requests/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const latestData = await latestRequests.json();

		// latest five Requests
		const latestInventories = await fetch(
			'https://taxinetghana.xyz/admin_get_all_drivers_inventories/',
			{
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				}
			}
		);
		const driversInventories = await latestInventories.json();

		// inventories today
		const inventoriesToday = await fetch(
			'https://taxinetghana.xyz/admin_get_inventories_today/',
			{
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				}
			}
		);
		const todaysInventories = await inventoriesToday.json();

		// passengers wallets
		const requestToLoadWallet = await fetch(
			'https://taxinetghana.xyz/admin_get_all_request_to_load_wallet/',
			{
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				}
			}
		);
		const walletRequest = await requestToLoadWallet.json();

		return {
			props: {
				passengerData,
				driverData,
				usersData,
				investorsData,
				pendingData,
				reviewingData,
				activeData,
				cancelledData,
				onetimeData,
				weeklyData,
				daysData,
				dailyData,
				latestData,
				driversInventories,
				todaysInventories,
				walletRequest
			}
		};
	}
</script>

<script>
	import Header from '../components/Header.svelte';
	import DashboardHeader from '../components/DashboardHeader.svelte';
	export let passengerData;
	export let driverData;
	export let usersData;
	export let investorsData;
	export let pendingData;
	export let reviewingData;
	export let activeData;
	export let cancelledData;
	export let onetimeData;
	export let weeklyData;
	export let daysData;
	export let dailyData;
	export let latestData;
	export let driversInventories;
	export let todaysInventories;
	export let walletRequest;

	import DashboardData1 from '../components/DashboardData1.svelte';
</script>

<svelte:head>
	<title>Taxinet | Dashboard</title>
</svelte:head>
<DashboardHeader />

<section class="dashboardback" > 
	<DashboardData1 {usersData}  {passengerData} {driverData} {investorsData} {latestData} {pendingData} {reviewingData} {activeData} {cancelledData} {onetimeData} {weeklyData} {daysData} {dailyData} {driversInventories} {todaysInventories} {walletRequest}/>
</section>

<style lang="scss">
	.dashboardback {
		background: url('../assets/images/Animated1.svg');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		width: 100%;
		height: 100%;
		position: fixed;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
