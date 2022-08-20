<script>
</script>

<section class="dheader">
	<div class="dashboardcontainer">
		<div class="overlay" />
		<div class="mainnavitems">
			<div class="title">
				<a href="/dashboard">Taxinet</a>
			</div>
			<hr />
			<div class="menulinks">
				<div class="navbarlink">
					<a href="/dashboard">Dashboard</a>
				</div>
				<div class="navbarlink">
					<a href="/allschedules">Requests</a>
				</div>
				<div class="navbarlink">
					<a href="/passengers">Passengers</a>
				</div>
				<div class="navbarlink">
					<a href="/drivers">Drivers</a>
				</div>
				<div class="navbarlink">
					<a href="/inventories">Inventories</a>
				</div>
                <div class="navbarlink">
					<a href="/wallets">Wallets</a>
				</div>
				<div class="navbarlink">
					<a href="/logout">Logout</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
    .dheader{
        .dashboardcontainer {
            background: url('../assets/images/pexels-tim-samuel-5835279.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            position: fixed;
            width: 260px;
            //   padding: 20px;
            color: #fff;
            z-index: 2;
    
            .overlay {
                position: fixed;
                width: 260px;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.677);
                overflow-y: auto;
                overflow-x: hidden;
                z-index: -1;
            }
            .mainnavitems {
                .title {
                    text-align: center;
                    font-weight: bold;
                    font-size: 30px;
                    //   padding-bottom: 10px;
                    padding: 20px;
                    color: white;
                }
                .menulinks {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    // align-items: start;
                    padding: 20px;
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
                            border-radius: 5px;
                            //   padding-left: 5px;
                            background: $main-color;
                            width: 100%;
                            display: flex;
                        }
                        .navlinks {
                            display: flex;
                            align-items: center;
                            gap: 1rem;
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
