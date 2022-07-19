<script>
	import { fly } from 'svelte/transition';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	let username;
	let password;
	let confirmPassword;
	let email;
	let phone;
	let fullname;
	let hasErrors = false;
	let passwordError = '';
	let hasPasswordError = false;
	let usernameError = '';
	let hasUsernameError = false;
	let emailError = '';
	let hasEmailError = false;
	let phoneError = '';
	let hasPhoneError = false;
	let fullnameError = '';
	let hasFullNameError = false;
    const handleErrorContainer = () => {
		hasErrors = false;
	};

	const handleSubmitFile = async () => {
		const apiUrl = 'https://taxinetghana.xyz/auth/users/';
		axios({
			method: 'POST',
			url: apiUrl,
			data: {
				username: username,
				email: email,
				phone_number: phone,
				full_name: fullname,
				password: password,
				re_password: confirmPassword
			},
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				goto('/login');
			})
			.catch((error) => {
				if (error.response) {
					if (error.response.data['username']) {
						hasUsernameError = true;
						usernameError = `Sorry 😢,${error.response.data['username']}`;
					}
					if (!error.response.data['username']) {
						hasUsernameError = false;
						usernameError = '';
					}
					if (error.response.data['full_name']) {
						hasErrors = true;
						hasFullNameError = true;
						fullnameError = `Sorry 😢,${error.response.data['full_name']}`;
					}
					if (!error.response.data['full_name']) {
						hasFullNameError = false;
						fullnameError = '';
					}

					if (error.response.data['email']) {
						hasErrors = true;
						hasEmailError = true;
						emailError = `Sorry 😢,${error.response.data['email']}`;
					}
					if (!error.response.data['email']) {
						hasEmailError = false;
						emailError = '';
					}
					if (error.response.data['phone_number']) {
						hasErrors = true;
						hasPhoneError = true;
						phoneError = `Sorry 😢,${error.response.data['phone_number']}`;
					}
					if (!error.response.data['phone_number']) {
						hasPhoneError = false;
						phoneError = '';
					}
				}
			});
	};
</script>

<svelte:head>
	<title>Taxinet | Register</title>
</svelte:head>

<section
	class="submit-film"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	{#if hasErrors}
		<div class="error-container">
			<div class="error-box">
				<div class="errors">
					{#if hasUsernameError}
						<h3>Username: {usernameError}</h3>
					{/if}
					{#if hasEmailError}
						<h3>Email: {emailError}</h3>
					{/if}
				</div>
				<p on:click={handleErrorContainer}>X</p>
			</div>
		</div>
	{/if}
	<form class="form" on:submit|preventDefault={handleSubmitFile}>
		<h1 class="form__title">Sign Up</h1>
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
				type="email"
				id="email"
				class="form__input"
				placeholder=""
				autocomplete="off"
				bind:value={email}
				required
			/>
			<label for="email" class="form__label">Email</label>
		</div>
		<div class="form__group">
			<input
				type="text"
				id="fullname"
				class="form__input"
				placeholder=""
				autocomplete="off"
				bind:value={fullname}
				required
			/>
			<label for="fullname" class="form__label">Full Name</label>
		</div>
		<div class="form__group">
			<input
				type="text"
				id="phone"
				class="form__input"
				placeholder=""
				autocomplete="off"
				bind:value={phone}
				required
			/>
			<label for="phone" class="form__label">Phone Number</label>
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
		<div class="form__group">
			<input
				type="password"
				id="confirmpassword"
				class="form__input"
				placeholder=""
				autocomplete="off"
				bind:value={confirmPassword}
				required
			/>
			<label for="confirmpassword" class="form__label">Confirm Password</label>
		</div>
		{#if hasPasswordError}
			<div class="full_error">
				<p>{passwordError}</p>
			</div>
		{/if}
		<button class="form__button">Sign Up</button>
		<br />
		<div class="noaccounts">
			<p>Already have an account?</p>
			<a href="/login">Login</a>
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

        .error-container {
		position: fixed;
		margin-top: 5px;
		padding: 10px;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.8);
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		transition: 2s ease;
		.error-box {
			display: flex;
			gap: 1rem;
			.errors {
				h3 {
					color: red;
					font-size: 15px;
				}
			}
			p {
				color: white;
				font-size: 25px;
				cursor: pointer;
				font-weight: bold;
			}
		}
	}

		.form {
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
