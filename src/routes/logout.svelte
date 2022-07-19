<script>
	import { fly } from 'svelte/transition';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { token } from '../routes/stores';
	import Spinner from '../components/Spinner.svelte';
	let isPosting = false;

	let tokenValue;
	token.subscribe((value) => {
		tokenValue = value;
	});

	const handleLogout = async () => {
		isPosting = true;
		setTimeout(function () {
			isPosting = false;
		}, 900);
		const logoutUrl = 'https://taxinetghana.xyz/auth/token/logout';
		axios({
			method: 'POST',
			url: logoutUrl,
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Token ${tokenValue}`
			}
		})
			.then(function (response) {
				goto('/');
				token.set('');
				localStorage.removeItem('token');
			})
			.catch((error) => {
				if (error.response) {
					console.log(error.response);
				}
			});
	};
</script>

<svelte:head>
	<title>Taxinet | Logout</title>
</svelte:head>

<section class="home" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<h3>Are you sure you want to logout?</h3>
	{#if isPosting}
		<Spinner />
	{:else}
		<button on:click={handleLogout}>Yes</button>
	{/if}

	<a href="/dashboard">No</a>
</section>
