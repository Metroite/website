<script>
    import SvelteMarkdown from "svelte-markdown"
    import source from "../../lib/blog/blog.md?raw"
</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="Modpack and Server News" />
</svelte:head>

<div class="text-column">
    <pre class="blog">
        <SvelteMarkdown {source}/>
    </pre>
</div>

<style>
    .blog {
        overflow-y: scroll;
        height: 50vh;
    }
</style>