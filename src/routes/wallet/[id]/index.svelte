<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/wallet_detail/${params.id}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const detailWallet = await res.json();

		if (res.ok) {
			return {
				props: {
					detailWallet
				}
			};
		}
		return detailWallet;
	}
</script>

<script>
	export let detailWallet;
	import { fly } from 'svelte/transition';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
	import Spinner from '../../../components/Spinner.svelte';
	let amount;
	let isUpdated = false;
	let oldAmount = detailWallet.amount
	console.log(oldAmount)
	
	let isPosting = false;
	const handleUpdateRequest = async () => {
		isPosting = true;
		setTimeout(function () {
			isPosting = false;
		}, 2500);
		const apiUrl = `https://taxinetghana.xyz/update_wallet/${detailWallet.id}/`;
		axios({
			method: 'PUT',
			url: apiUrl,
			data: {
				amount: parseFloat(oldAmount) + parseFloat(amount),
				passenger: detailWallet.passenger
			},
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				isUpdated = true;
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
</script>

<svelte:head>
	<title>Taxinet | {detailWallet.get_passengers_name}</title>
</svelte:head>
<DashboardHeader />

<div class="mainbox">
	<section class="inventorydetailcontainer">
		<div
			class="inventorybox"
			in:fly={{ y: 50, duration: 500, delay: 500 }}
			out:fly={{ duration: 500 }}
		>
			<a href="/passengerswallets" class="close">X</a>
			<div class="picname">
				<img src={detailWallet.get_passenger_profile_pic} alt="" />
				<h3>{detailWallet.get_passengers_name}</h3>
			</div>

			<form class="form" on:submit|preventDefault={handleUpdateRequest}>
				<div class="form__group">
					<input
						type="text"
						id="title"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={amount}
						required
					/>
					<label for="title" class="form__label">Amount</label>
				</div>
				{#if isPosting}
					<Spinner />
				{:else if !isUpdated}
					<button class="form__button">Update</button>
				{/if}
				<br />
				{#if isUpdated}
					<a sveltekit:reload href="/passengerswallets">Back</a>
				{/if}
			</form>
		</div>
	</section>
</div>

<style lang="scss">
	@import '../../../styles/constant';
	.mainbox {
		// @include setBackground;
		// @include setLeftMargin;
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.866);
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		.inventorydetailcontainer {
		
			.inventorybox {
				.close {
					cursor: pointer;
					font-size: 2rem;
					color: $main-color;
					&:hover {
						transform: rotate(360deg);
					}
				}
				// width: 70%;
				@include setLeftMargin;
				@include setGlass;
				// padding-top: 50px;
				margin-right: 120px;
				margin-top: 30px;
				.picname {
					display: flex;
					gap: 2rem;
					align-items: center;
					justify-content: center;
					padding: 20px;
					h3 {
						text-transform: capitalize;
					}
					img {
						width: 150px;
						height: 150px;
						border-radius: 50%;
					}
				}
				.form {
					box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.22);
					width: 40rem;
					padding: 2rem;
					border-radius: $radius;
					background-color: $clr-bg;
					transition: 1s ease;
					p {
						padding-bottom: 10px;
					}
					.ridesuccess {
						padding-bottom: 15px;
						padding-top: 15px;
					}
					.full_error {
						opacity: 0;
						-moz-animation: cssAnimation 0.5s;
						/* Firefox */
						-webkit-animation: cssAnimation 0.5s;
						/* Safari and Chrome */
						-o-animation: cssAnimation 0.5s;
						/* Opera */
						animation: cssAnimation 0.5s;
						-webkit-animation-fill-mode: forwards;
						animation-fill-mode: forwards;
						p {
							display: flex;
							align-items: center;
							padding: 10px;
							color: red;
						}
					}

					.form__title {
						margin-bottom: 1rem;
					}

					.form__group {
						position: relative;
						height: 3rem;
						margin-bottom: 1.5rem;
						input {
							width: 100%;
							height: 100%;
							border: 2px solid $clr-primary;
							border-radius: 0.5rem;
							outline: none;
							padding: 1.25rem;
							background: none;
							color: inherit;
							transition: 1s ease;

							&:hover {
								border-color: $clr-gray100;
							}
							&:focus {
								border-color: white;
							}
						}

						label {
							position: absolute;
							left: 1rem;
							top: 0.9rem;
							padding: 0 0.5rem;
							transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
							background-color: $clr-bg;
						}
					}
					button {
						display: black;
						margin-left: auto;
						padding: 0.75rem 2rem;
						background: $clr-primary-dark;
						border-radius: 0.5rem;
						outline: none;
						border: none;
						cursor: pointer;
						transition: 1s ease-in;
						color: #ffc700;
						&:hover {
							background-color: $clr-primary;
							color: black;
						}
					}

					.form__input:focus ~ .form__label,
					.form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
						top: -0.5rem;
						left: 0.8rem;
						font-size: 0.8rem;
					}
					a {
						display: black;
						margin-left: auto;
						padding: 0.75rem 2rem;
						background: $clr-primary-dark;
						border-radius: 0.5rem;
						outline: none;
						border: none;
						cursor: pointer;
						transition: 1s ease-in;
						color: #ffc700;
						&:hover {
							background-color: $clr-primary;
							color: black;
						}
					}
				}
			}
		}
	}
</style>
