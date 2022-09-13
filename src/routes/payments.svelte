<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://taxinetghana.xyz/get_all_payments_today/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const driversPayments = await res.json();

		if (res.ok) {
			return {
				props: {
					driversPayments
				}
			};
		}
	}
</script>

<script>
	export let driversPayments;
	import PaymentList from "../components/payments/PaymentList.svelte"
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	let paid_dates = [];
	import { fly } from 'svelte/transition';

	driversPayments.forEach((element) => {
		if (!paid_dates.includes(element['date_paid']))
			paid_dates.push(element['date_paid']);
	});
</script>

<svelte:head>
	<title>Taxinet | Payments</title>
</svelte:head>
<DashboardHeader />

<section class="all-schedules">
	<h3>Drivers Payments</h3>
	<div class="schedules-container">
		<PaymentList {paid_dates} />
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.all-schedules {
		@include setLeftMargin;
		@include setBackground;
		// margin-left: 260px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		// width: 90%;
		padding-top: 30px;
		h3 {
			text-align: center;
			color: white;
			font-size: 30px;
		}
		.schedules-container {
			width: 50%;
		}
	}
</style>
