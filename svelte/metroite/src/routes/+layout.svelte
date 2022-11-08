<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener("mousemove", parallax);
		const elem = document.querySelector("#parallax");
		/**
		 * @param {{ clientX: any; clientY: any; }} e
		 */
		function parallax(e) {
			let _w = window.innerWidth / 2;
			let _h = window.innerHeight / 2;
			let _mouseX = e.clientX;
			let _mouseY = e.clientY;
			let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
			let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
			let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
			let x = `${_depth3}, ${_depth2}, ${_depth1}`;
			// @ts-ignore
			elem.style.backgroundPosition = x;
		}
	});
</script>

<div class="app" id="parallax">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="modpack">metroite.de/modpack</a> for instructions</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	#parallax {
		position: relative;
		width: 100%;
		height: 100vh;
		background-image: url(), url(), url(https://i.redd.it/h64tbetfd6a11.jpg);
		background-repeat: no-repeat;
		background-position: center;
		background-position: 50% 50%;
    }

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
