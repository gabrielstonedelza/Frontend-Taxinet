<script context="module">
	export function load({ error }) {
		return {
			props: { message: error.message }
		};
	}
</script>

<script>
	export let message;
    import Header from '../components/Header.svelte'
</script>

<section class="error">
	<div class="contents">
		<h2>Oooops</h2>
		<p>Something went wrong,please refresh the page</p>
	</div>
</section>

<style lang="scss">
	@import '../styles/constant';
    *{
        margin: 0;
        padding: 0;
    }

	.error {
        width: 100%;
        height: 100vh;
        background: url("../assets/images/error.jpg");
        background-size: cover;
        background-position: center;
        .contents{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            padding-top: 120px;
            h2{
                font-size:50px;
            }
            p{
                font-size:30px;
            }
        }

	}
</style>
