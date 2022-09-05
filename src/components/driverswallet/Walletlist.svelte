<script>
	export let driversWallet;
	import WalletCard from '../driverswallet/WalletCard.svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	class="passengers-lists-container"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	{#each driversWallet as wallet}
		<div class="box">
			<WalletCard {wallet} />
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../../styles/constant';
	.passengers-lists-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		justify-content:center;
		gap: 1rem;
		.box {
		}
	}
</style>