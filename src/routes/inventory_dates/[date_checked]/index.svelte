<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`https://taxinetghana.xyz/admin_get_all_drivers_inventories_by_date/${params.date_checked}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		const inventoryDate = await res.json();
        
		if (res.ok) {
			return {
				props: {
					inventoryDate
				}
			};
		}
		return inventoryDate;
	}
</script>

<script>
    import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
    export let inventoryDate
    import { fly } from 'svelte/transition';
    import Datelists from "../../../components/inventorydates/Datelists.svelte"
    console.log(inventoryDate)

    
</script>
<svelte:head>
	<title>Taxinet | Inventories</title>
</svelte:head>
<DashboardHeader />
<section class="inventory_dates_container">
    <div class="main-container" in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}>
    <Datelists {inventoryDate}/>

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