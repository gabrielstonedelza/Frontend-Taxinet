<script context="module">
    export let slug;
	export async function load({ fetch}) {
		const res = await fetch(`https://taxinetghana.xyz/admin_request_detail/${slug}/`, {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			}
		});
		const scheduleDetail = await res.json();

		if (res.ok) {
			return {
				props: {
					scheduleDetail
				}
			};
		}
		return scheduleDetail;
	}
</script>

<script>
	export let scheduleDetail;
	import { fly } from 'svelte/transition';
	import UpdateRequest from "../../../components/UpdateRequest.svelte"
</script>

<section>
    <UpdateRequest {scheduleDetail}/>
</section>