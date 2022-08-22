<script>
	import dashboard from '../assets/images/icons/dashboard.png';
	import requests from '../assets/images/icons/sedan.png';
	import passengers from '../assets/images/icons/passenger.png';
	import drivers from '../assets/images/icons/driver.png';
	import investors from '../assets/images/icons/investor.png';
	import inventory from '../assets/images/icons/checklists.png';
	import wallet from '../assets/images/icons/wallet.png';
	import cab from '../assets/images/taxinet_cab.png';
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
							<td>Taxinet</td>
						</tr>
					</a>
				</table>
			</div>
			<hr />
			<div class="menulinks">
				<table>
					<div class="navbarlink">
						<a href="/dashboard">
							<tr>
								<td><img src={dashboard} alt="" /></td>
								<td>Dashboard</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/allschedules">
							<tr>
								<td><img src={requests} alt="" /></td>
								<td>Requests</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/passengers">
							<tr>
								<td><img src={passengers} alt="" /></td>
								<td>Passengers</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/drivers">
							<tr>
								<td><img src={drivers} alt="" /></td>
								<td>Drivers</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/inventories">
							<tr>
								<td><img src={inventory} alt="" /></td>
								<td>Inventories</td>
							</tr>
						</a>
					</div>
					<div class="navbarlink">
						<a href="/wallets">
							<tr>
								<td><img src={wallet} alt="" /></td>
								<td>Wallets</td>
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
			// background-color: #4158d0;
			// background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
			background-color: #ff3cac;
			background-image: linear-gradient(120deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%);

			height: 100%;
			overflow-y: auto;
			overflow-x: hidden;
			position: fixed;
			width: 260px;
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
							&:hover {
								border: solid 1px silver;
								border-radius: 15px;
								//   padding-left: 5px;
								background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
								width: 100%;
								display: flex;
							}
							.navlinks {
								display: flex;
								align-items: center;
								gap: 1rem;
							}
							a {
								tr {
									display: flex;
									align-items: center;
									justify-content: center;
									gap: 2rem;
									td {
										color: white;
										img {
											width: 30px;
											height: 30px;
										}
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
