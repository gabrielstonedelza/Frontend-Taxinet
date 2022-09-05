<script>
	import { fly } from 'svelte/transition';
	export let slug;
	export let closeUpdatePage;
	export let passenger;
	export let detailId;
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import Spinner from '../components/Spinner.svelte';

	let price = '';
	let charge = '';
	let isPosting = false;
	let status = '';
	let updateSuccess = '';
	let isUpdated = false;

	const handleUpdateRequest = async () => {
		isPosting = true;
		setTimeout(function () {
			isPosting = false;
		}, 900);
		const apiUrl = `https://taxinetghana.xyz/admin_update_requested_ride/${slug}/`;
		axios({
			method: 'PUT',
			url: apiUrl,
			data: {
				price: price,
				charge: charge,
				passenger: passenger,
				ride: detailId,
				status: 'Active'
			},
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				updateSuccess = 'Ride was updated successfully.';
				isUpdated = true;

				// redirect(`/schedule/${slug}`)
			})
			.catch((error) => {
				// if (error.response) {
				//   if (error.response.data["non_field_errors"]) {
				//     toast.error(`Sorry 😢,${error.response.data["non_field_errors"]}`);
				//   }
				// }
				console.log(error.response);
			});
	};
</script>

<div class="mainformbox">
	<section
		class="submit-form form-box"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
		out:fly={{ duration: 500 }}
	>
		<form class="form" on:submit|preventDefault={handleUpdateRequest}>
			<h1 class="form__title">Update</h1>
			<div class="form__group">
				<input
					type="text"
					id="title"
					class="form__input"
					placeholder=""
					autocomplete="off"
					bind:value={price}
					required
				/>
				<label for="title" class="form__label">Price</label>
			</div>
			<div class="form__group">
				<input
					type="text"
					id="initial payment"
					class="form__input"
					placeholder=""
					autocomplete="off"
					bind:value={charge}
					required
				/>
				<label for="initial payment" class="form__label">Charge</label>
			</div>
			{#if isPosting}
				<Spinner />
			{:else if !isUpdated}
				<button class="form__button">Update</button>
			{/if}
			<br />
			{#if isUpdated}
				<p class="ridesuccess">{updateSuccess}</p>
			{/if}
			<br />
			{#if isUpdated}
				<a sveltekit:reload href={`/schedule/${slug}/`}>Back</a>
			{/if}
		</form>
		{#if !isUpdated}
			<p class="close" on:click={closeUpdatePage}>X</p>
		{/if}
	</section>
</div>

<style lang="scss">
	@import '../styles/constant';
	.mainformbox {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		.submit-form {
			font-family: monospace;
			font-weight: 500;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ffc700;
			padding: 20px;
			gap: 1rem;
			font-weight: bold;

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
			p.close {
				cursor: pointer;
				font-size: 2rem;
				// border: solid 2px $main-color;
				// border-radius: 50%;
				// padding: 10px;
				&:hover {
					transform: rotate(360deg);
				}
			}
		}
	}

	// media query
	@media (max-width: 991px) {
		.submit-form {
			padding: 40px;
			.form {
				width: 45rem;
				padding: 20px;
			}
		}
	}
	@media (max-width: 768px) {
		.submit-form {
			padding: 40px;
			.form {
				width: 35rem;
				padding: 20px;
			}
		}
	}
	@media (max-width: 500px) {
		.submit-form {
			padding: 40px;
			.form {
				width: 25rem;
				padding: 20px;
			}
		}
	}
	@keyframes cssAnimation {
		99% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes cssAnimation {
		99% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
