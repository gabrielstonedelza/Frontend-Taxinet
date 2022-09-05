<script context="module">
	export async function load({ fetch }) {
		const driversResponse = await fetch('https://taxinetghana.xyz/all_drivers_profile/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const driversData = await driversResponse.json();

		return {
			props: {
				driversData
			}
		};
	}
</script>

<script>
	export let driversData;
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import { fly } from 'svelte/transition';
	import LoadDriversWallet from '../components/LoadDriversWallet.svelte';
	let isLoadWalletOpened = false;
	let userAddedToWallet = '';
	let userAddedToWalletId = 0;

	const openLoadWalletOverlay = (id, username) => {
		isLoadWalletOpened = true;
		userAddedToWallet = username;
		userAddedToWalletId = id;
		console.log(id);
	};
	const closeLoadWalletOverlay = () => {
		isLoadWalletOpened = false;
	};
</script>

<svelte:head>
	<title>Taxinet | Load Wallet</title>
</svelte:head>
<DashboardHeader />

<section class="passengerwallet">
	<div class="container" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
		<h3>Load Wallet</h3>
		<div class="passwithnowallet">
			{#each driversData as data}
				<div class="box">
					<img src={data.driver_profile_pic} alt="" />
					<p>{data.username}</p>
					<button on:click={openLoadWalletOverlay(data.id, data.username)}>Load</button>
				</div>
				{#if isLoadWalletOpened}
					<LoadDriversWallet
						userid={data.id}
						username={userAddedToWallet}
						passenger={userAddedToWalletId}
						{closeLoadWalletOverlay}
					/>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.passengerwallet {
		@include setBackground;
		@include setLeftMargin;
		// margin-left: 260px;
		padding-top: 20px;
		.container {
			h3 {
				// text-align: center;
				margin-bottom: 20px;
				color: white;
				font-size: 25px;
			}
			.passwithnowallet {
				display: flex;
				gap: 1rem;

				.box {
					width: 250px;
					@include setGlass;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 1rem;
					img {
						width: 150px;
						height: 150px;
						object-fit: cover;
						border-radius: 50%;
					}
					p {
						text-transform: capitalize;
					}
					button {
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
	}
</style>
