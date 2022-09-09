<script context="module">
	export async function load({ fetch }) {
		const passengerResponse = await fetch('https://taxinetghana.xyz/all_passengers_profile/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const passengerData = await passengerResponse.json();

		return {
			props: {
				passengerData
			}
		};
	}
</script>

<script>
	export let passengerData;
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import { fly } from 'svelte/transition';
	import LoadWallet from '../components/LoadWallet.svelte';
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
			{#each passengerData as data}
				<div class="box">
					<img src={data.passenger_profile_pic} alt="" />
					<p>{data.username}</p>
					<button on:click={openLoadWalletOverlay(data.id, data.username)}>Load</button>
				</div>
				{#if isLoadWalletOpened}
					<LoadWallet
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
						background-color: #EABD07;
						border-radius: 8px;
						border-width: 0;
						color: #000;
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
					// button {
					// 	font-size: 15px;
					// 	border: none;
					// 	outline: none;
					// 	padding-left: 20px;
					// 	padding-right: 20px;
					// 	padding-top: 12px;
					// 	padding-bottom: 12px;
					// 	border-radius: 10px;
					// 	cursor: pointer;
					// 	box-shadow: $box-shadow;
					// 	color: white;
					// 	font-weight: bold;
					// 	background-color: rgba(255, 255, 255, 0.2);
					// 	transition: all 300ms ease;
					// 	&:hover {
					// 		background-color: rgba(119, 117, 117, 0.278);
					// 	}
					// }
				}
			}
		}
	}
</style>
