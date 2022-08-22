<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/load_wallet_detail/${params.id}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const loadWalletDetail = await res.json();

		if (res.ok) {
			return {
				props: {
					loadWalletDetail
				}
			};
		}
		return loadWalletDetail;
	}
</script>

<script>
	export let loadWalletDetail;
	import { fly } from 'svelte/transition';
	import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
</script>

<svelte:head>
	<title>Taxinet | {loadWalletDetail.get_passengers_name}</title>
</svelte:head>
<DashboardHeader />
<section class="loadwalletcontainer">
	<div class="walletbox" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
		<img src={loadWalletDetail.get_passenger_profile_pic} alt="" />
		<h3>{loadWalletDetail.get_passengers_name}</h3>
		<p>
			{loadWalletDetail.get_passengers_name} is requesting an amount of ¢{loadWalletDetail.get_amount}
			to be transferred into wallet.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../../../styles/constant';
	.loadwalletcontainer {
		background-color: #ff3cac;
		background-image: linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%);
		width: 100%;
		height: 100%;
		position: fixed;
		overflow-y: auto;
		overflow-x: hidden;
		.walletbox {
			@include setLeftMargin;
			@include setGlass;
			margin-top: 10%;
			margin-left: 30%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			width: 40%;
			text-align: center;
			img {
				width: 150px;
				height: 150px;
				border-radius: 50%;
				box-shadow: $box-shadow;
			}
			h3 {
				text-transform: capitalize;
				font-size: 25px;
			}
			p {
				font-size: 20px;
			}
		}
	}
</style>
