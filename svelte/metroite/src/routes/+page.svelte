<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<div class="rainbowText">
            Minecraft IP: metroite.de
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
