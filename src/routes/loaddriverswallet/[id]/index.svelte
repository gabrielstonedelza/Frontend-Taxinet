<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/load_drivers_wallet_detail/${params.id}/`, {
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
	<title>Taxinet | {loadWalletDetail.get_drivers_name}</title>
</svelte:head>
<DashboardHeader />
<section class="loadwalletcontainer">
	<div class="walletbox" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
		<img src={loadWalletDetail.get_drivers_profile_pic} alt="" />
		<div class="details">
			<h3>{loadWalletDetail.get_drivers_name}</h3>
			<p>
				{loadWalletDetail.get_drivers_name} is requesting an amount of ¢{loadWalletDetail.get_amount}
				to be transferred into wallet.
			</p>
			<br />
			<a href="/wallets">Go to wallets</a>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../../styles/constant';
	.loadwalletcontainer {
		background-color: #293454;
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
			// flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			width: 40%;
			text-align: center;
			img {
				width: 150px;
				height: 150px;
				border-radius: 10px;
				box-shadow: $box-shadow;
			}
			.details {
				h3 {
					text-transform: capitalize;
					font-size: 25px;
				}
				p {
					font-size: 20px;
				}

				a {
					background-color: #4e3f66;
					border-radius: 8px;
					border-width: 0;
					color: #fff;
					cursor: pointer;
					display: inline-block;
					font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
					font-size: 14px;
					font-weight: 500;
					line-height: 20px;
					list-style: none;
					margin: 0;
					padding: 10px 12px;
					text-align: center;
					transition: all 200ms;
					vertical-align: baseline;
					white-space: nowrap;
					user-select: none;
					-webkit-user-select: none;
					touch-action: manipulation;
				}
			}
		}
	}
</style>
