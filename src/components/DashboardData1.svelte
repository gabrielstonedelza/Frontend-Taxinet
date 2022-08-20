<script>
	import { fly } from 'svelte/transition';
	export let passengerData;
	export let driverData;
	export let usersData;
	export let investorsData;
	export let pendingData;
	export let reviewingData;
	export let activeData;
	export let cancelledData;
	export let onetimeData;
	export let weeklyData;
	export let daysData;
	export let dailyData;
	export let latestData;
	export let driversInventories;
	export let todaysInventories;
	export let walletRequest;
	import RequestFive from './RequestFive.svelte';
	import InventoriesToday from './InventoriesToday.svelte';
	import LoadWalletRequest from "./LoadWalletRequests.svelte"
	import addButton from '../assets/images/icons/add.png';
</script>

<section
	class="dashboardcontainer"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<div class="userspassengersdrivers">
		<div class="box" id="debox">
			<div class="boxitem">
				<div class="details">
					<div class="usersadd" style="display: flex;justify-content:space-between;">
						<h2>Users</h2>
						<a href="/userregistration">
							<img src={addButton} alt="" style="width:40px; height:40px;cursor:pointer;" title="Add new user"/>
						</a>
					</div>
					<small> {usersData.length} </small>
				</div>
			</div>
		</div>
		<div class="box" id="debox">
			<div class="boxitem">
				<div class="details">
					<h2>Passenger</h2>
					<small> {passengerData.length} </small>
				</div>
			</div>
		</div>
		<div class="box" id="debox">
			<div class="boxitem">
				<div class="details">
					<h2>Drivers</h2>
					<small> {driverData.length} </small>
				</div>
			</div>
		</div>
		<div class="box" id="debox">
			<div class="boxitem">
				<div class="details">
					<h2>Investors</h2>
					<small> {investorsData.length} </small>
				</div>
			</div>
		</div>
	</div>
	<br />
	<hr />
	<div class="latest">
		<div class="latextbox1">
			<div class="latestitems">
				<div class="latestheader">
					<h2>Schedule Requests</h2>
				</div>
			</div>
			<RequestFive {latestData} />
		</div>
		<div class="latextbox1">
			<div class="latestitems">
				<div class="latestheader">
					<h2>Inventories Today</h2>
				</div>
			</div>
			<InventoriesToday {todaysInventories} />
		</div>
	</div>
	<div class="walletRequest">
		<div class="walletbox">
			<LoadWalletRequest {walletRequest} />
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.dashboardcontainer {
		margin-left: 270px;
		padding: 20px;
		padding-top: 30px;

		.userspassengersdrivers {
			display: flex;
			gap: 1rem;
			justify-content: space-evenly;
			#debox,
			#debox1,
			#debox2,
			#debox3 {
				border: 1px solid rgba(255, 255, 255, 0.3);
				background: rgba(255, 255, 255, 0.2);
				box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(5px);
				color: white;
				&:hover {
					background: rgba(255, 255, 255, 0.461);
				}
			}

			.box {
				background: rgba(209, 209, 209, 0.8);
				padding: 10px;
				width: 300px;
				height: 150px;
				box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
				border-radius: 10px;
				.boxitems {
					display: flex;
					justify-content: space-between;
					position: relative;
					.usericon {
						font-size: 40px;
					}
					.details {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						small {
							font-size: 20px;
						}
					}
				}
			}
		}
		.latest {
			// padding: 10px;
			// padding: 20px;
			padding-top: 40px;
			display: flex;
			justify-content: space-between;
			gap: 1rem;
			.latestbox1,
			.latestbox2 {
				width: 50%;
				height: auto;
				border: 1px solid rgba(255, 255, 255, 0.3);
				background: rgba(255, 255, 255, 0.2);
				box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(5px);
				border-radius: 10px;
				.latestitems {
					padding: 10px;
					.latestheader {
						display: flex;
						gap: 1rem;
						align-items: center;
						color: #fff;
						margin-bottom: 10px;
					}
					.latestcontainer {
						background: rgba(128, 128, 128, 0.403);
						border-radius: 10px;
						padding: 10px;
						padding-bottom: 10px;
						.latestcontainer1 {
							h3 {
								color: white;
							}
							small {
								color: rgb(194, 191, 191);
							}
							span {
								color: rgb(194, 191, 191);
								padding-left: 10px;
								padding-right: 10px;
							}
							cursor: pointer;
							padding-bottom: 10px;
						}
					}
				}
				// &:hover {
				//     background: rgba(255, 255, 255, 0.461);
				// }
			}
		}
	}
</style>
