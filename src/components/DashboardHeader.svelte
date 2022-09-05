<script>
	import dashboard from '../assets/images/dashboard.png';
	import requests from '../assets/images/sedan.png';
	import passengers from '../assets/images/passenger.png';
	import drivers from '../assets/images/driving.png';
	import investors from '../assets/images/icons/investor.png';
	import inventory from '../assets/images/clipboard.png';
	import wallet from '../assets/images/wallet.png';
	import cab from '../assets/images/taxinet_cab.png';
	import car from "../assets/images/car.png"
</script>

<section class="dheader">
	<div class="dashboardcontainer">
		<div class="overlay" />
		<div class="mainnavitems">
			<div class="title">
				<table>
					<a href="/dashboard">
						<tr>
							<td>
								<img src={cab} alt="" />
							</td>
							<!-- <td>Taxinet</td> -->
						</tr>
					</a>
				</table>
			</div>
			<hr />
			<div class="menulinks">
				<table>
					<div class="navbarlink">
						<a href="/dashboard" title="Dashboard">
							<tr>
								<td><img src={dashboard} alt="" /></td>
								<td class="onhover">Dashboard</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/allschedules">
							<tr>
								<td><img src={requests} alt="" /></td>
								<td class="onhover">Requests</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/passengers">
							<tr>
								<td><img src={passengers} alt="" /></td>
								<td class="onhover">Passengers</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/drivers">
							<tr>
								<td><img src={drivers} alt="" /></td>
								<td class="onhover">Drivers</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/inventories">
							<tr>
								<td><img src={inventory} alt="" /></td>
								<td class="onhover">Inventories</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/wallets">
							<tr>
								<td><img src={wallet} alt="" /></td>
								<td class="onhover">Wallets</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/vehicles">
							<tr>
								<td><img src={car} alt="" /></td>
								<td class="onhover">Vehicles</td>
							</tr>
						</a>
					</div>
				</table>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
	.dheader {
		.dashboardcontainer {

			background-color: #4E3F66;

			height: 100%;
			overflow-y: auto;
			overflow-x: hidden;
			position: fixed;
			width: 110px;
			color: #fff;
			z-index: 2;
			
			.mainnavitems {
				.title {
					text-align: center;
					font-weight: bold;
					font-size: 30px;
					//   padding-bottom: 10px;
					padding: 20px;
					color: white;
					table {
						a {
							tr {
								display: flex;
								align-items: center;
								justify-content: center;
								gap: 2rem;
								td {
									color: white;
									img {
										width: 50px;
										height: 50px;
										object-fit: contain;
									}
								}
							}
						}
					}
				}
				.menulinks {
					display: flex;
					flex-direction: column;
					justify-content: center;
					// align-items: start;
					padding: 20px;
					table {
						.navbarlink {
							cursor: pointer;
							display: flex;
							gap: 1rem;
							align-items: center;
							padding: 15px;
							font-size: 20px;
							font-weight: bold;
							transition: 1s ease;
							color: white !important;
						
							.navlinks {
								display: flex;
								align-items: center;
								gap: 1rem;
							}
							a {
								display: flex;
								tr {
									display: flex;
									// align-items: center;
									// justify-content: center;
									flex-direction: column;
									gap: 1rem;
									td {
										text-align: center;
										display: flex;
										// justify-content: center;
										// align-items: center;
										color: white;
										img {
											width: 30px;
											height: 30px;
										}
										transition: all 300ms ease;
									}
									.onhover{
										font-size: 15px;
										
										
										display: none;
									}
								}
								&:hover{
									.onhover{
										display: block;
									}
								}
							}
						}
					}
				}
				.bars {
					display: none;
				}
			}
		}
	}
</style>
