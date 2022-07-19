<script>
	import { fly } from 'svelte/transition';
	import vid from '../assets/vids/Taxinet Services.mp4';
	import pic1 from '../assets/images/pexels-tima-miroshnichenko-6169668.jpg';
	import pic2 from '../assets/images/pexels-mike-b-116675.jpg';
	import pic3 from '../assets/images/pexels-norma-mortenson-4392871.jpg';
	import pic4 from '../assets/images/pexels-tim-samuel-5835265.jpg';
</script>

<svelte:head>
	<title>Taxinet | Services</title>
</svelte:head>

<section
	class="services-container"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<div class="video-container">
		<video autoplay playsinline muted loop>
			<source src={vid} type="video/mp4" />
		</video>
	</div>

	<h2>Our Services</h2>
	<div class="service-container">
		<div class="services-box1">
			<div class="box">
				<img src={pic4} alt="" />
				<h3>Taxinet Ride</h3>
			</div>
			<div class="box">
				<img src={pic2} alt="" />
				<h3>Taxinet Luxury</h3>
			</div>
		</div>
		<br />
		<div class="services-box2">
			<div class="box">
				<img src={pic3} alt="" />
				<h3>Taxinet Delivery</h3>
			</div>
			<div class="box">
				<img src={pic1} alt="" />
				<h3>Taxinet Truck</h3>
			</div>
		</div>
	</div>
	<br />
</section>

<style lang="scss">
	.services-container {
		.video-container {
			width: 100%;
			height: 100%;
			opacity: 0.8;
			video {
				width: 100%;
				height: 100%;
			}
		}
		h2 {
			padding-top: 20px;
			padding-bottom: 20px;
			font-size: 30px;
			text-align: center;
		}
		.service-container {
			max-width: 1200px;
			margin: 0 auto;
			padding: 20px;
			.services-box1,
			.services-box2 {
				display: flex;
				gap: 1rem;
				justify-content: center;
				.box {
					cursor: pointer;
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 1rem;
					width: 400px;
					height: 300px;
                    overflow: hidden;
					img {
                        object-fit: cover;
						width: 100%;
						height: 100%;
						border-radius: 10px;
						display: block;
						transition: 1s ease;
						&:hover {
							transform: scale(1.25);
                            border-radius: 10px;
						}
					}
					h3 {
						text-align: center;
					}
				}
			}
		}
	}

    @media only screen and (max-width: 600px){
        .service-container{
            .services-box1,
			.services-box2{
                flex-direction: column;
                justify-content: center;
                .box{
                    width: 100%;
                }
            }
        }

    }
    @media only screen and (max-width: 768px){}
</style>
