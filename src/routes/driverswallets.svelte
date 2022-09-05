<script context="module">
	export async function load({ fetch }) {
		
		// drivers wallet
		const res1 = await fetch('https://taxinetghana.xyz/admin_get_all_drivers_wallet/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const driversWallet = await res1.json();

		if ( res1.ok) {
			return {
				props: {
					driversWallet
				}
			};
		}
	}
</script>

<script>
	export let driversWallet;
	import WalletList from '../components/driverswallet/Walletlist.svelte';
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import addButton from '../assets/images/icons/add.png';
</script>

<svelte:head>
	<title>Taxinet | Wallets</title>
</svelte:head>
<DashboardHeader />

<section class="all-schedules">
	<div class="addandheader">
		<a sveltekit:prefetch sveltekit:noscroll href="/driversandwallets">
			<img
				src={addButton}
				alt=""
				style="width:40px; height:40px;cursor:pointer;"
				title="Add to wallet"
			/>
		</a>
		<h3>Drivers Wallets</h3>
	</div>
	<div class="schedules-container">
		<WalletList {driversWallet} />
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
		padding-top: 30px;
		.addandheader {
			display: flex;
			gap: 2rem;
			justify-content: center;
			h3 {
				text-align: center;
				color: white;
				font-size: 30px;
			}
		}
		.schedules-container {
			width: 50%;
		}
	}
</style>
