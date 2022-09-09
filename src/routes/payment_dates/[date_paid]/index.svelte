<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/admin_get_all_drivers_payments_by_date/${params.date_paid}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const payment_dates = await res.json();
        
		if (res.ok) {
			return {
				props: {
					payment_dates
				}
			};
		}
		return payment_dates;
	}
</script>

<script>
    import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
    export let payment_dates
    import { fly } from 'svelte/transition';
    import DateLists from "../../../components/paymentdates/DateLists.svelte"

    
</script>
<svelte:head>
	<title>Taxinet | Payments</title>
</svelte:head>
<DashboardHeader />
<section class="inventory_dates_container">
    <div class="main-container" in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}>
    <DateLists {payment_dates}/>

    </div>

</section>

<style lang="scss">
    @import "../../../styles/constant";
    .inventory_dates_container{
        @include setBackground;
        .main-container{
            @include setLeftMargin;
        }
    }
</style>