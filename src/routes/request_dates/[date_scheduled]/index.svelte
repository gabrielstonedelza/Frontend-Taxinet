<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/admin_get_all_requests_by_date/${params.date_scheduled}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const requestDates = await res.json();
        
		if (res.ok) {
			return {
				props: {
					requestDates
				}
			};
		}
		return requestDates;
	}
</script>

<script>
    import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
    export let requestDates
    import { fly } from 'svelte/transition';
    import RequestLists from "../../../components/requestdates/RequestLists.svelte"   
</script>
<svelte:head>
	<title>Taxinet | Request</title>
</svelte:head>
<DashboardHeader />
<section class="inventory_dates_container">
    <div class="main-container" in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}>
    <RequestLists {requestDates}/>
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