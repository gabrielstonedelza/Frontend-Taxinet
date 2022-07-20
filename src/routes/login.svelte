<script>
	import { token } from './stores';
	import { fly } from 'svelte/transition';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import Spinner from '../components/Spinner.svelte';

	let username;
	let password;
	let passwordError = '';
	let hasPasswordError = false;
	let usernameError = '';
	let hasUsernameError = false;
	let isPosting = false;

	const handleSubmitFile = async () => {
		// isPosting = true;
		// setTimeout(function () {
		// 	isPosting = false;
		// }, 900);
		// const apiUrl = 'https://taxinetghana.xyz/auth/token/login/';
		// axios({
		// 	method: 'POST',
		// 	url: apiUrl,
		// 	data: {
		// 		username: username,
		// 		password: password
		// 	},
		// 	headers: { 'Content-Type': 'multipart/form-data' }
		// })
		// 	.then((response) => {
		// 		goto('/dashboard');
		// 		localStorage.setItem('token', response.data['auth_token']);
		// 		token.set(response.data['auth_token']);
		// 	})
		// 	.catch((error) => {
		// 		if (error.response) {
		// 			if (error.response.data['non_field_errors']) {
		// 				hasPasswordError = true;
		// 				passwordError = `Sorry 😢,${error.response.data['non_field_errors']}`;
		// 			}
		// 			console.log(error.response);
					
		// 		}
		// 	});
	};
</script>

<svelte:head>
	<title>Taxinet | Login</title>
</svelte:head>

<section
	class="submit-film"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<form class="form" on:submit|preventDefault={handleSubmitFile}>
		<h1 class="form__title">Login</h1>

		<div class="form__group">
			<input
				type="text"
				id="title"
				class="form__input"
				placeholder=""
				autocomplete="off"
				bind:value={username}
				required
			/>
			<label for="title" class="form__label">Username</label>
		</div>

		<div class="form__group">
			<input
				type="password"
				id="poster"
				class="form__input"
				placeholder=""
				autocomplete="off"
				bind:value={password}
				required
			/>
			<label for="poster" class="form__label">Password</label>
		</div>
		{#if hasPasswordError}
			<div class="full_error">
				<p>{passwordError}</p>
			</div>
		{/if}
		{#if isPosting}
			<Spinner />
		{:else}
			<button class="form__button">Login</button>
		{/if}
		<br />
		<div class="noaccounts">
			<p>Don't have an account?</p>
			<a href="/signup">Sign Up</a>
		</div>
	</form>
</section>

<style lang="scss">
	// color variables
	$clr-primary: #18ffff;
	$clr-primary-light: #adffff;
	$clr-primary-dark: #091034;
	$clr-gray100: #f9fbff;
	$clr-gray150: #f4f6fb;
	$clr-gray200: #eef1f6;
	$clr-gray300: #e1e5ee;
	$clr-gray400: #767b91;
	$clr-gray500: #4f546c;
	$clr-gray600: #2a324b;
	$clr-bg: #060b23;
	$radius: 1rem;

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.submit-film {
		font-family: monospace;
		font-weight: 500;
		margin-top: 100px;

		// height: 100vh;
		display: grid;
		justify-content: center;
		align-items: center;
		color: #ffc700;
		padding: 20px;

		.form {
			box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.22);

			width: 40rem;
			padding: 2rem;
			border-radius: $radius;
			background-color: $clr-bg;
			transition: 1s ease;
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
			.noaccounts {
				padding-top: 20px;
				display: flex;
				gap: 1rem;
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

	// media query
	@media (max-width: 991px) {
		.submit-film {
			padding: 40px;
			.form {
				width: 45rem;
				padding: 20px;
			}
		}
	}
	@media (max-width: 768px) {
		.submit-film {
			padding: 40px;
			.form {
				width: 35rem;
				padding: 20px;
			}
		}
	}
	@media (max-width: 500px) {
		.submit-film {
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
