<script>
	import { fly } from 'svelte/transition';
	export let passenger;
	export let poster;
	export let pName;
	export let title;
	export let sType;
	export let sPriority;
	export let sDescription;
	export let rType;
	export let pLoc;
	export let dLoc;
	export let pTime;
	export let sDate;
	export let dSchedules;
	export let tScheduled;
	export let sStatus;
	export let slug;
	export let detailId;
	export let initPrice;
	export let agreedPrice;
	export let allDrivers;
	export let allAssignedDrivers;
	export let schedules;

	import UpdateRequest from './UpdateRequest.svelte';
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import AssignDriver from './AssignDriver.svelte';

	let isUpdatePage = false;
	let isAssignDriverPage = false;
	let statusActive = false;
	if (sStatus == 'Active') {
		statusActive = true;
	}
	const openUpdatePage = () => {
		isUpdatePage = true;
	};
	const closeUpdatePage = () => {
		isUpdatePage = false;
	};

	const openAssignPage = () => {
		isAssignDriverPage = true;
	};
	const closeAssignPage = () => {
		isAssignDriverPage = false;
	};
</script>

<svelte:head>
	<title>Taxinet | {title}</title>
</svelte:head>
<DashboardHeader />

<section class="detailhome">
	{#if isUpdatePage}
		<UpdateRequest {slug} {detailId} {passenger} {closeUpdatePage} />
	{/if}
	{#if isAssignDriverPage}
		<AssignDriver
			{slug}
			{detailId}
			{passenger}
			{closeAssignPage}
			{allDrivers}
			{allAssignedDrivers}
			{schedules}
		/>
	{/if}

	<div class="detailback">
		<div
			class="detailcontainer"
			in:fly={{ y: 50, duration: 500, delay: 500 }}
			out:fly={{ duration: 500 }}
		>
			<div class="maindetailcontainer">
				<div class="imagecontainer" />
				<div class="details">
					<div class="detailsheader">
						<img src={poster} alt="" />
						<h2>{title}</h2>
						{#if statusActive}
							<button on:click={openAssignPage}>Assign Driver</button>
						{/if}
						<button on:click={openUpdatePage}>Update Schedule</button>
					</div>
					<div class="detailtable">
						<table class="styled-table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
									<th>Priority</th>
									<th>From</th>
									<th>To</th>
									<th>Ride</th>
									<th>Time</th>
									<th>Status</th>
									<th>Date</th>
									<th>Date Scheduled</th>
									<th>Time Scheduled</th>
									<th>Price</th>
									<th>Initial payment</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{pName}
									</td>
									<td>
										{sType}
									</td>
									<td>
										{sPriority}
									</td>
									<td>
										{pLoc}
									</td>
									<td>
										{dLoc}
									</td>
									<td>
										{rType}
									</td>
									<td>
										{pTime}
									</td>
									<td>
										{sStatus}
									</td>
									<td>
										{sDate}
									</td>

									<td>
										{dSchedules}
									</td>
									<td>
										{tScheduled.slice(0, 5)}
									</td>
									<td>
										{agreedPrice}
									</td>
									<td>
										{initPrice}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- <div class="detailschedule">
						<div class="box">
							<p>Passenger Name: <span class="scheduleinfo">{pName}</span></p>
							<p>Schedule Type: <span class="scheduleinfo">{sType}</span></p>
						</div>
						<div class="box">
							<p>Schedule Priority: <span class="scheduleinfo">{sPriority}</span></p>
							<p>Ride Type: <span class="scheduleinfo">{rType}</span></p>
						</div>
						<div class="box">
							<p>Pick up location: <span class="scheduleinfo">{pLoc}</span></p>
							<p>Drop off location: <span class="scheduleinfo">{dLoc}</span></p>
						</div>
						<div class="box">
							<p>Pick up time: <span class="scheduleinfo">{pTime}</span></p>
							<p>Start date: <span class="scheduleinfo">{sDate}</span></p>
						</div>
						<div class="box">
							<p>Status: <span class="scheduleinfo">{sStatus}</span></p>
							<p>Date Scheduled: <span class="scheduleinfo">{dSchedules}</span></p>
						</div>
						<div class="box">
							<p>
								Price: <span class="scheduleinfo">
									{agreedPrice}
								</span>
							</p>
							<p>Initial Payment : <span class="scheduleinfo">{initPrice}</span></p>
						</div>
						<div class="box">
							<p>Time Scheduled: <span class="scheduleinfo">{tScheduled.slice(0, 8)}</span></p>
						</div>
						<div class="description">
							<p>Description : <span class="scheduleinfo">{sDescription}</span></p>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.detailback {
		@include setBackground;
		.detailcontainer {
			@include setLeftMargin;
			margin-left: 220px;
			.maindetailcontainer {
				// @include setGlass;
				display: flex;
				gap: 2rem;
				.details {
					.detailtable {
						.styled-table {
							border-collapse: collapse;
							margin: 18px 0;
							font-size: 1.2rem;
							font-family: sans-serif;
							min-width: 100%;
							font-weight: bold;
							box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
							thead tr {
								background-color: #00987a4c;
								color: #ffffff;
								text-align: center;
							}
							th,
							td {
								padding: 12px 10px;
								text-align: center;
							}
							tr {
								&:hover {
									color: #ffffff;
									background: rgba(255, 255, 255, 0.461);
								}
							}
							tbody tr {
								border-bottom: 1px solid #dddddd;
							}
						}
					}
					.detailsheader {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 20px;
						h2 {
							text-align: center;
							font-size: 30px;
							color: $primary-color;
						}
						button {
							background-color: #4e3f66;
							border-radius: 8px;
							border-width: 0;
							color: #fff;
							cursor: pointer;
							display: inline-block;
							font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
							font-size: 14px;
							font-weight: 500;
							line-height: 20px;
							list-style: none;
							margin: 0;
							padding: 10px 12px;
							text-align: center;
							transition: all 200ms;
							vertical-align: baseline;
							white-space: nowrap;
							user-select: none;
							-webkit-user-select: none;
							touch-action: manipulation;
						}
						img {
							border-radius: 50%;
							width: 70px;
							height: 70px;
							// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
						}
					}
					@include setGlass;
					.detailschedule {
						display: flex;
						flex-direction: column;
						.box {
							display: flex;
							justify-content: space-between;
							gap: 1rem;
							p {
								padding: 10px;
								color: $primary-color;
								font-size: 20px;
								line-height: 1.1666666667;
								font-weight: 600;
								letter-spacing: 0.009em;
								text-transform: capitalize;
								span {
									// color: $main-color;
									font-style: italic;
								}
							}
						}
						p.description {
							padding: 10px;
							color: $primary-color;
							font-size: 20px;
							line-height: 1.1666666667;
							font-weight: 600;
							letter-spacing: 0.009em;
							text-transform: capitalize;
							padding-left: 10px;
							span {
								// color: $main-color;
								font-style: italic;
							}
						}
					}
				}
			}
		}
	}
</style>
