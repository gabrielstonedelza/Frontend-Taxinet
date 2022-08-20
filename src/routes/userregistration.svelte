<script>
	import { fly } from 'svelte/transition';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import Spinner from '../components/Spinner.svelte';

	let user_type = '';
	let email = '';
	let fullname = '';
	let phonenumber = '';
	let username = '';
	let password = '';
	let confirmPassword = '';
	// error messages
	let hasErrors = false;
	let usernameError = '';
	let emailError = '';
	let fullnameError = '';
	let phonenumberError = '';
	let passwordError = '';
	let hasusernameError = false;
	let hasemailError = false;
	let hasfullnameError = false;
	let hasPhoneNumberError = false;
	let hasPasswordError = false;
	let isPosting = false;

	const handleErrorContainer = () => {
		hasErrors = false;
	};

	const handleSubmitFile = async () => {
		isPosting = true;
		setTimeout(function () {
			isPosting = false;
		}, 1500);
		const apiUrl = 'https://taxinetghana.xyz/auth/users/';
		axios({
			method: 'POST',
			url: apiUrl,
			data: {
				username: username,
				email: email,
				full_name: fullname,
				phone_number: phonenumber,
				user_type: user_type,
				password: password,
				re_password: confirmPassword
			},
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				goto('/dashboard');
			})
			.catch((error) => {
				if (error.response) {
					console.log(error.response);
					if (error.response.data['username']) {
						hasErrors = true;
						hasusernameError = true;
						usernameError = `${error.response.data['username']}`;
					}
					if (!error.response.data['username']) {
						hasusernameError = false;
						usernameError = '';
					}
					if (error.response.data['email']) {
						hasemailError = true;
						emailError = `${error.response.data['email']}`;
					}
					if (!error.response.data['email']) {
						hasemailError = false;
						emailError = '';
					}
					if (error.response.data['full_name']) {
						hasErrors = true;
						hasfullnameError = true;
						fullnameError = `${error.response.data['full_name']}`;
					}
					if (!error.response.data['full_name']) {
						hasfullnameError = false;
						fullnameError = '';
					}
					if (error.response.data['phone_number']) {
						hasErrors = true;
						hasPhoneNumberError = true;
						phonenumberError = `${error.response.data['phone_number']}`;
					}
					if (!error.response.data['phone_number']) {
						hasPhoneNumberError = false;
						phonenumberError = '';
					}
					if (error.response.data['non_field_errors']) {
						hasErrors = true;
						hasPasswordError = true;
						passwordError = `${error.response.data['non_field_errors']}`;
					}
					if (!error.response.data['non_field_errors']) {
						hasPasswordError = false;
						passwordError = '';
					}
				}
			});
	};
</script>

<svelte:head>
	<title>Taxinet | New User</title>
</svelte:head>
<DashboardHeader />
<div class="mainregistercontainer">
	<section
		class="register-container"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
		out:fly={{ duration: 500 }}
	>
		<!-- <br /><br /><br /> -->
		<form class="form" on:submit|preventDefault={handleSubmitFile}>
			<h1 class="form__title">Add new user</h1>

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
			<!-- <label for="categories" class="form__label">Category</label> -->
			<div class="form__group">
				<select name="categories" bind:value={user_type} class="form__input">
					<option value="Passenger">Passenger</option>
					<option value="Driver">Driver</option>
					<option value="Investor">Investor</option>
					<option value="Administrator">Administrator</option>
				</select>
				<label for="poster" class="form__label">Select User Type</label>
			</div>

			<div class="form__group">
				<input
					type="text"
					id="email"
					class="form__input"
					placeholder=""
					autocomplete="off"
					bind:value={email}
					required
				/>
				<label for="description" class="form__label">Email</label>
			</div>
			<div class="form__group">
				<input
					type="text"
					id="language"
					class="form__input"
					placeholder=""
					autocomplete="off"
					bind:value={fullname}
					required
				/>
				<label for="language" class="form__label">Full Name</label>
			</div>
			<div class="form__group">
				<input
					type="text"
					id="genre"
					class="form__input"
					placeholder=""
					autocomplete="off"
					bind:value={phonenumber}
					required
				/>
				<label for="genre" class="form__label">Phone Number</label>
			</div>
			<div class="form__group">
				<input
					type="password"
					id="country"
					class="form__input"
					placeholder=""
					autocomplete="off"
					bind:value={password}
					required
				/>
				<label for="password" class="form__label">Password</label>
			</div>
			<div class="form__group">
				<input
					type="password"
					id="movie_link"
					class="form__input"
					placeholder=""
					autocomplete="off"
					bind:value={confirmPassword}
					required
				/>
				<label for="movie_link" class="form__label">Confirm Password</label>
			</div>

			{#if isPosting}
				<Spinner />
			{:else}
				<button class="form__button">Register</button>
			{/if}
			<br />
			{#if hasErrors}
				{#if hasusernameError}
					<h3>Username: {usernameError}</h3>
				{/if}

				{#if hasemailError}
					<h3>Email Error: {emailError}</h3>
				{/if}

				{#if hasfullnameError}
					<h3>Name Error: {fullnameError}</h3>
				{/if}
				{#if hasPasswordError}
					<h3>Password: {passwordError}</h3>
				{/if}
				{#if hasPhoneNumberError}
					<h3>Number Error: {phonenumberError}</h3>
				{/if}
			{/if}
		</form>
	</section>
</div>

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

	@import '../styles/constant';

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
	.mainregistercontainer {
		@include setLeftMargin;
		@include setBackground;
		margin-left: 140px;
		padding-top: 0px;
	}
	.register-container {
		font-family: monospace;
		font-weight: 500;

		height: auto;
		display: grid;
		justify-content: center;
		align-items: center;
		color: $main-color;
		padding: 20px;

		.form {
			width: 40rem;
			padding: 2rem;
			border-radius: $radius;
			background-color: $clr-bg;
			transition: 1s ease;

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
				textarea {
					resize: none;
					width: 100%;
					height: 100px;
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
				select {
					width: 100%;
					height: 100%;
					border: 2px solid $clr-primary;
					border-radius: 0.5rem;
					background: none;
					color: inherit;
					transition: 1s ease;
					padding-left: 1.25rem;
					outline: none;
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
				color: $main-color;
				&:hover {
					background-color: $clr-primary;
				}
			}

			.form__input:focus ~ .form__label,
			.form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
				top: -0.5rem;
				left: 0.8rem;
				font-size: 0.8rem;
			}
		}
	}

	// media query
	@media (max-width: 991px) {
		.register-container {
			padding: 40px;
			.form {
				width: 45rem;
				padding: 20px;
			}
		}
	}
	@media (max-width: 768px) {
		.register-container {
			padding: 40px;
			.form {
				width: 35rem;
				padding: 20px;
			}
		}
	}
	@media (max-width: 500px) {
		.register-container {
			padding: 40px;
			.form {
				width: 25rem;
				padding: 20px;
			}
		}
	}
</style>
