<script>
	function copyLink() {
        navigator.clipboard.writeText(window.location.origin + "/" + document.getElementById("copyLink")?.getAttribute('href'))
    }
</script>

<svelte:head>
	<title>Modpack</title>
	<meta name="description" content="Instructions on how to install the modpack" />
</svelte:head>

<div class="text-column">
	<h1>Modpack Instructions</h1>

	<p>
		Kopiere den Link zum <a title="Click to copy" id="copyLink" class="copyLink" href="Kings.zip" on:click|preventDefault={() => copyLink()}>Modpack</a> und füge den Link
		in <a href="https://prismlauncher.org/download/">PrismLauncher</a> oder, falls mit kostenlosem
		<a href="https://account.ely.by/login">ely.by Account</a>, in
		<a href="https://nightly.link/UltimMC/Launcher/workflows/main/develop">UltimMC</a> ein unter:
	</p>

	<pre>Add Instanz > Import from zip</pre>

	<p>
		Stell sicher, dass <a href="https://adoptium.net/de/">Java 17</a> ausgewählt ist im Launcher:
	</p>

	<pre>Einstellungen > Java > Auto-detect</pre>
</div>

<style>
	.copyLink {
		border-radius: 0.5em;
	}

	.copyLink:hover {
		background-color: #ff3e00;
	}

	.copyLink:active {
		background-color: #40b3ff;
		box-shadow: 0 2px #666;
		transform: translateY(2px);
	}
</style>