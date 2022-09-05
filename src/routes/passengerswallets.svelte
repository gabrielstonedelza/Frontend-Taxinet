<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://taxinetghana.xyz/admin_get_all_passengers_wallet/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const pasWallets = await res.json();
		

		if (res.ok) {
			return {
				props: {
					pasWallets,
				}
			};
		}
	}
</script>

<script>
	export let pasWallets;
	import WalletList from '../components/wallets/WalletList.svelte';
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
		<a sveltekit:prefetch sveltekit:noscroll href="/passengersandwallets">
			<img
				src={addButton}
				alt=""
				style="width:40px; height:40px;cursor:pointer;"
				title="Add to wallet"
			/>
		</a>
		<h3>Passengers Wallets</h3>
	</div>
	<div class="schedules-container">
		<WalletList {pasWallets} />
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
