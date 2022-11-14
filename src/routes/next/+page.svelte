<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const countDownDate = new Date("Nov 12, 2022 21:00:00").getTime();

		function count() {
			let now = new Date().getTime();
			let timeleft = countDownDate - now;

			let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
			let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

			// @ts-ignore
			document.getElementById("days").innerHTML = days + "D "
			// @ts-ignore
			document.getElementById("hours").innerHTML = hours + "H "
			// @ts-ignore
			document.getElementById("mins").innerHTML = minutes + "M "
			// @ts-ignore
			document.getElementById("secs").innerHTML = seconds + "S "
		}
	})
</script>

<svelte:head>
	<title>Next</title>
	<meta name="description" content="Next update released!" />
</svelte:head>

<section>
	<h1>
		<div class="rainbowText">
            Visit <a href="modpack">metroite.de/modpack</a> and update to the new modpack!
        </div>
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.rainbowText {
		font-family:arial black;
		background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet); 
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;  
		animation: move 100s linear infinite;
		font-size: larger;
		opacity: 0.7;
		text-shadow: 0.1em 0.1em #000000;
	}

	@keyframes move {
	to {
		background-position: 4500vh;
	}
	}
</style>