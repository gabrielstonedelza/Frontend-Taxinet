<script>
	import { token } from '../routes/stores';
	import androidPic from '../assets/images/icons/google-play.png';
	import appStorePic from '../assets/images/icons/app-store.png';
	let tokenValue;
	token.subscribe((value) => {
		tokenValue = value;
	});
</script>

<section class="about-scheduling">
	<h2>About Scheduling</h2>
	<div class="schedule-options">
		<div class="option-1">
			<h3>How Taxinet Scheduling works</h3>
			<p>Taxinet is all about scheduling your rides to your destination of choice.</p>
			<p>All you have to do is to schedule for</p>
			<ul>
				<li>One Time</li>
				<li>Daily</li>
				<li>Weekly</li>
				<li>Monthly</li>
				<li>Specific Days</li>
				<li>Until Cancelled</li>
			</ul>
		</div>
		<div class="option-2">
			<h3>After Scheduling</h3>
			<p>You will get a message and a call from Taxinet to verify your schedule.</p>
			<p>Price for your schedule would be available for you after confirmation.</p>
			<p>Free free to bagain,remember we are here for you 😉.</p>
			<p>After that you will then be assigned a driver for your schedule.</p>
			<p>Enjoy the convience and safe ride from Taxinet.</p>
		</div>
	</div>
	<h2>Taxinet is now available only in Kumasi</h2>
	<br />
	<div class="available">
		<div class="availability">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126804.78720670275!2d-1.6863179088608893!3d6.690251020495021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb93e59a4e4c49%3A0x829c711d7b65e682!2sKumasi!5e0!3m2!1sen!2sgh!4v1658157340724!5m2!1sen!2sgh"
				title=""
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
		<div class="available-message">
			<p>
				Taxinet has started its operation in Kumasi and would be available to all other regions
				soon.Services won't be available for other regions until ready.We hope to get to you soon.
			</p>
		</div>
	</div>
	<h2>Apps coming soon</h2>
	<div class="app-announcement">
		<div class="appstores">
			<img src={androidPic} alt="" />
			<img src={appStorePic} alt="" />
		</div>
		<p>
			Apps for both android and ios will be available soon for download.You will certainly find it
			here when ready.
		</p>
	</div>
	<br />
</section>

<style lang="scss">
	.about-scheduling {
		padding: 20px;
		max-width: 1200px;
		margin: 0 auto;
		h2 {
			padding-top: 20px;
			padding-bottom: 20px;
			font-size: 30px;
		}
		.schedule-options {
			display: flex;
			gap: 1rem;
			justify-content: space-between;
			h3 {
				font-size: 24px;
				padding-top: 20px;
				padding-bottom: 20px;
			}
			p {
				font-size: 20px;
				line-height: 1.1666666667;
				letter-spacing: 0.009em;
				color: #86868b;
			}
			ul {
				list-style-type: none;
				display: block;
				margin-block-start: 1em;
				margin-block-end: 1em;
				margin-inline-start: 0px;
				margin-inline-end: 0px;
				font-size: 20px;
				line-height: 1.1666666667;
				letter-spacing: 0.009em;
				color: #86868b;
			}
		}
		.available {
			display: flex;
			gap: 1rem;
			justify-content: space-between;
			// flex-wrap: wrap;
			.availability {
				width: 100%;
				height: 300px;
				iframe {
					width: 100%;
					height: 300px;
					border-radius: 20px;
				}
			}
			.available-message {
				width: 100%;
				p {
					font-size: 20px;
					line-height: 1.1666666667;
					letter-spacing: 0.009em;
					color: #86868b;
				}
			}
		}
		.app-announcement {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			.appstores {
				display: flex;
				gap: 2rem;
				img {
					width: 50px;
					height: 50px;
				}
			}
			p {
				font-size: 20px;
				line-height: 1.1666666667;
				letter-spacing: 0.009em;
				color: #86868b;
			}
		}
	}

	// media queries
	@media only screen and (max-width: 768px) {
		.about-scheduling {
			.schedule-options {
				flex-direction: column;
				justify-content: center;
			}
			.available {
				flex-direction: column;
				justify-content: center;
			}
		}
	}
	@media only screen and (max-width: 600px) {
		.about-scheduling {
			.schedule-options {
				flex-direction: column;
				justify-content: center;
			}
			.available {
				flex-direction: column;
				justify-content: center;
			}
		}
	}
</style>
