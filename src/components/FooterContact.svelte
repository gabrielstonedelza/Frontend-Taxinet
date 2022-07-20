<script>
	import facebook from '../assets/images/icons/facebook.png';
	import instagram from '../assets/images/icons/instagram.png';
	import twitter from '../assets/images/icons/twitter.png';
	import youtube from '../assets/images/icons/youtube.png';
	import mail from '../assets/images/icons/mail.png';
	import phone from '../assets/images/icons/phone-call.png';
</script>

<section class="footer-contact">
	<h2>Contact Us</h2>
	<div class="contact-container">
		<div class="social-media">
			<div class="social-box">
				<a href="https://www.facebook.com" target="_blank">
					<img src={facebook} alt="" />
				</a>
			</div>
			<div class="social-box">
				<a href="https://www.instagram.com" target="_blank">
					<img src={instagram} alt="" />
				</a>
			</div>
			<div class="social-box">
				<a href="https://www.twitter.com" target="_blank">
					<img src={twitter} alt="" />
				</a>
			</div>
			<div class="social-box">
				<a href="https://www.youtube.com" target="_blank">
					<img src={youtube} alt="" />
				</a>
			</div>
		</div>
		<div class="contacts">
			<div class="contact-box">
				<img src={mail} alt="" /> taxinetghana@gmail.com
			</div>
			<div class="contact-box">
				<img src={phone} alt="" /> +233 271020030 | 233 2444950505
			</div>
			<div class="contact-box">
				<a href="www.facebook.com">Privacy</a>
			</div>
			<div class="contact-box">
				<a href="www.facebook.com">Terms</a>
			</div>
		</div>
	</div>
	<br />
	<div class="site-name">
		&copy 2022 TaxinetGhana.All Rights Reserved. Designed by Havens Software
	</div>
</section>

<style lang="scss">
	.footer-contact {
		background-color: #000;
		padding: 20px;

		color: #86868b;
		h2 {
			padding-top: 20px;
			padding-bottom: 20px;
			font-size: 30px;
			text-align: center;
		}
		.contact-container {
			max-width: 1200px;
			margin: 0 auto;
			display: flex;
			gap: 1rem;
			justify-content: space-between;
			.social-media {
				display: flex;
				gap: 2rem;
				.social-box {
					a {
						img {
							width: 30px;
							height: 30px;
						}
					}
				}
			}
			.contacts {
				display: flex;
				gap: 1rem;
				align-items: center;
				.contact-box {
					display: flex;
					gap: 1rem;
					align-items: center;
					img {
						width: 30px;
						height: 30px;
					}
					a {
						color: #86868b;
					}
				}
			}
		}
		.site-name {
			display: flex;
			justify-content: center;
		}
	}
	// media queries
	@media only screen and (max-width: 600px) {
		.contact-container {
			flex-direction: column;
			justify-content: center;
			.social-media {
				justify-content: center;
			}
			.contacts {
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
	}
	@media only screen and (max-width: 768px) {
		.footer-contact {
			.contact-container {
				flex-direction: column;
				justify-content: center;
				.social-media {
					justify-content: center;
				}
				.contacts {
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
</style>
