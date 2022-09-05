

<script>
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import addButton from '../assets/images/icons/add.png';
	import passengers from '../assets/images/icons/passenger.png';
	import drivers from '../assets/images/icons/driver.png';
</script>

<svelte:head>
	<title>Taxinet | Wallets</title>
</svelte:head>
<DashboardHeader />

<section class="all-schedules">
	<div class="driverpassengerbox">
		<a sveltekit:prefetch sveltekit:noscroll href="/driverswallets">
			<div class="driverbox">
				<img src={drivers} alt="" />
				<h2>Drivers Wallet</h2>
			</div>
		</a>
		<a sveltekit:prefetch sveltekit:noscroll href="/passengerswallets">
			<div class="passengerbox">
				<img src={passengers} alt="" />
				<h2>Passengers Wallet</h2>
			</div>
		</a>
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
		width: 100%;
		padding-top: 130px;
		.driverpassengerbox {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			a {
				.driverbox,.passengerbox {
					@include setGlass;
					display: flex;
					flex-direction: column;
					gap: 1rem;
					justify-content: center;
					align-items: center;
					img{
						width: 250px;
						height: 200px;
						object-fit: fill;
					}
				}
			}
		}
	}
</style>
