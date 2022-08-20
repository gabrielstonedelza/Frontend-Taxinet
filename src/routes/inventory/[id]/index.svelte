<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://taxinetghana.xyz/admin_get_driver_inventory_detail/${params.id}/`,
			{
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				}
			}
		);
		const inventoryDetails = await res.json();

		if (res.ok) {
			return {
				props: {
					inventoryDetails
				}
			};
		}
		return inventoryDetails;
	}
</script>

<script>
	export let inventoryDetails;
	import { fly } from 'svelte/transition';
	import DashboardHeader from '../../../components/DashboardHeader.svelte';
	import Header from '../../../components/Header.svelte';
</script>

<svelte:head>
	<title>Taxinet | {inventoryDetails.username}</title>
</svelte:head>
<DashboardHeader />

<section class="inventorydetailcontainer">
	<div
		class="inventorybox"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
		out:fly={{ duration: 500 }}
	>
		<div class="imagename">
			<div class="image-container">
				<img src={inventoryDetails.get_driver_profile_pic} alt="driver's profile picture" />
			</div>
            <div class="details">
                <h2>{inventoryDetails.get_drivers_name}'s Inventory For Today</h2>
                <!-- <br /> -->
                <small>{inventoryDetails.date_checked}</small> /
                <small>{inventoryDetails.time_checked.slice(0,8)}</small>
            </div>
		</div>
		<div class="inventory-list">
			<table class="styled-table">
				<thead>
					<tr>
						<th>Device</th>
						<th>Condition</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Windscreen</td>
						<td>
							{#if inventoryDetails.windscreen == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
					<tr>
						<td>Side Mirror</td>
						<td>
							{#if inventoryDetails.side_mirror == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>No./Registration Plate</td>
						<td>
							{#if inventoryDetails.registration_plate == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Tire Pressure</td>
						<td>
							{#if inventoryDetails.tire_pressure == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Driving Mirror</td>
						<td>
							{#if inventoryDetails.driving_mirror == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Tire Thread Depth(3mm)</td>
						<td>
							{#if inventoryDetails.tire_thread_depth == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Wheel nuts</td>
						<td>
							{#if inventoryDetails.wheel_nuts == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    
                    <tr>
						<td>Engine Oil (Dipstick)</td>
						<td>
							{#if inventoryDetails.engine_oil == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Fuel Level</td>
						<td>
							{#if inventoryDetails.fuel_level == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Brake Fluid</td>
						<td>
							{#if inventoryDetails.break_fluid == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Radiator/Engine Coolant</td>
						<td>
							{#if inventoryDetails.radiator_engine_coolant == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Power Steering Fluid</td>
						<td>
							{#if inventoryDetails.power_steering_fluid == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Wiper Washer Fluid</td>
						<td>
							{#if inventoryDetails.wiper_washer_fluid == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Seat Belts</td>
						<td>
							{#if inventoryDetails.seat_belts == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Steering Wheel</td>
						<td>
							{#if inventoryDetails.steering_wheel == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Horn</td>
						<td>
							{#if inventoryDetails.horn == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Electric windows</td>
						<td>
							{#if inventoryDetails.electric_windows == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Windscreen Wipers</td>
						<td>
							{#if inventoryDetails.windscreen_wipers == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Headlights (Dip/High)</td>
						<td>
							{#if inventoryDetails.head_lights == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Trafficators</td>
						<td>
							{#if inventoryDetails.trafficators == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Tail/Rear Lights</td>
						<td>
							{#if inventoryDetails.tail_rear_lights == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Reverse Lights</td>
						<td>
							{#if inventoryDetails.reverse_lights == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Interior Light</td>
						<td>
							{#if inventoryDetails.interior_lights == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Engine Noise</td>
						<td>
							{#if inventoryDetails.engine_noise == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Excessive E. Smoke</td>
						<td>
							{#if inventoryDetails.excessive_smoke == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Foot Brake</td>
						<td>
							{#if inventoryDetails.foot_break == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Hand Brake</td>
						<td>
							{#if inventoryDetails.hand_break == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Wheel Bearing Noise</td>
						<td>
							{#if inventoryDetails.wheel_bearing_noise == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Warning Triangle</td>
						<td>
							{#if inventoryDetails.warning_triangle == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>Fire Extinguisher</td>
						<td>
							{#if inventoryDetails.fire_extinguisher == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>
                    <tr>
						<td>First Aid Box</td>
						<td>
							{#if inventoryDetails.first_aid_box == 'Okay'}
								√
							{:else}
								X
							{/if}
						</td>
					</tr>

				</tbody>
			</table>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../../styles/constant';
	.inventorydetailcontainer {
		background: url('../../../assets/images/Animated1.svg');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		width: 100%;
		height: 100%;
		position: fixed;
		overflow-y: auto;
		overflow-x: hidden;
        .inventorybox {
            // width: 70%;
            @include setLeftMargin;
            @include setGlass;
            padding-top: 50px;
            margin-right: 120px;
            margin-top: 30px;
            .imagename{
                display: flex;
                gap: 1rem;
                align-items: center;
                justify-content: center;
                .image-container{
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }
                }
                h2{
                    color: white;
                    text-transform: capitalize;
                }
            }
    
            .inventory-list {
                display: flex;
                justify-content: center;
                .styled-table {
                    border-collapse: collapse;
                    margin: 25px 0;
                    font-size: 1.2rem;
                    font-family: sans-serif;
                    min-width: 80%;
                    font-weight: bold;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                    thead tr {
                        background-color: #009879;
                        color: #ffffff;
                        text-align: left;
                    }
                    th,
                    td {
                        padding: 12px 15px;
                    }
                    tr{
                        &:hover{
                            color: #ffffff;
                            background: rgba(255, 255, 255, 0.461);
                        }
                    }
                    tbody tr {
                        border-bottom: 1px solid #dddddd;
                    }
                    
                }
            }
        }
	}
</style>
