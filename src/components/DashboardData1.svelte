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
	export let driversWallet;
	import RequestFive from './RequestFive.svelte';
	import InventoriesToday from './InventoriesToday.svelte';
	import LoadWalletRequest from './LoadWalletRequests.svelte';
	import DriversLoadWalletRequest from './DriversLoadWalletRequests.svelte';
	import addButton from '../assets/images/icons/add.png';
</script>

<section
	class="dashboardcontainer"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<div class="maindashboardright">
		<div class="userspassengersdrivers">
			<div class="box" id="debox">
				<div class="boxitem">
					<div class="details">
						<div class="usersadd" style="display: flex;justify-content:space-between;">
							<h2>Users</h2>
							<a href="/userregistration">
								<img
									src={addButton}
									alt=""
									style="width:40px; height:40px;cursor:pointer;"
									title="Add new user"
								/>
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
			<div class="latextbox1 box1">
				<div class="latestitems">
					<div class="latestheader">
						<h2>Schedule Requests</h2>
					</div>
				</div>
				<RequestFive {latestData} />
			</div>
			<div class="latextbox1 box2">
				<div class="latestitems">
					<div class="latestheader">
						<h2>Inventories Today</h2>
					</div>
				</div>
				<InventoriesToday {todaysInventories} />
			</div>
		</div>
		<br />
		<div class="walletRequest">
			<div class="walletbox box1">
				<div class="latestitems">
					<div class="latestheader">
						<h2>Passenger wants to load wallet</h2>
					</div>
				</div>
				<LoadWalletRequest {walletRequest} />
			</div>
			<div class="walletbox box2">
				<div class="latestitems">
					<div class="latestheader">
						<h2>Drivers wants to load wallet</h2>
					</div>
				</div>
				<DriversLoadWalletRequest {driversWallet} />
			</div>
		</div>
	</div>
	<div class="maindashboardleft" />
</section>

<style lang="scss">
	@import '../styles/constant';
	.dashboardcontainer {
		margin-left: 100px;
		padding: 20px;
		padding-top: 30px;
		display: grid;
		grid-template-columns: 60% 20% 20%;

		.maindashboardright {
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
					// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
					box-shadow: $box-shadow;
					backdrop-filter: blur(5px);
					color: white;
				}

				.box {
					@include setGlass;
					width: 300px;
					height: 100px;

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
							h2 {
								font-size: 15px;
							}
						}
					}
				}
			}
			.latest {
				display: flex;
				justify-content: center;
				// flex-direction: column;
				padding-top: 40px;
				gap: 1rem;
				.box1,.box2{
					width: 50%;
				}
				.latextbox1 {
					@include setGlass;
					box-shadow: $box-shadow;
					// width: 50%;
					height: auto;
					.latestitems {
						padding-bottom: 10px;
						.latestheader {
							display: flex;
							gap: 1rem;
							align-items: center;
							color: #fff;
							margin-bottom: 10px;
						}
					}
				}
			}
			.walletRequest {
				display: flex;
				gap: 1rem;
				justify-content:space-between;
				.walletbox {
					padding-top: 40px;
					@include setGlass;
					box-shadow: $box-shadow;
					// width: 50%;
					height: auto;
				}
				.box1,.box2{
					width: 50%;
				}
			}
		}
		.maindashboardleft {
		}
	}
</style>
