<script context="module">
	export async function load({ fetch }) {
		// drivers wallet
		const res1 = await fetch('https://taxinetghana.xyz/admin_get_all_users_wallet/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const allWallets = await res1.json();

		if (res1.ok) {
			return {
				props: {
					allWallets
				}
			};
		}
	}
</script>

<script>
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import addButton from '../assets/images/icons/add.png';
	import passengers from '../assets/images/icons/passenger.png';
	import drivers from '../assets/images/icons/driver.png';
	import WalletList from '../components/wallets/WalletList.svelte';
	export let allWallets;
</script>

<svelte:head>
	<title>Taxinet | Wallets</title>
</svelte:head>
<DashboardHeader />

<section class="all-schedules">
	<h3>Wallets</h3>
<br>
	<div class="schedules-container">
		<WalletList {allWallets} />
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.all-schedules{
		@include setLeftMargin;
		@include setBackground;
		padding-top: 30px;
		h3{ 
			text-align: center;
			color: white;
			font-size: 30px;
		}
	
	}
</style>
