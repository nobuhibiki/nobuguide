<script>
	export let data;
</script>

<h1>{data.post.title}</h1>
<div><p>{data.post.content}</p></div>

<style>
	h1 {
        font-size: 5em;
        margin-bottom: 0em;
        font-family: nyghtserif;
        font-weight: bold;
    }
    p {
        font-family: spacegrotesk;
    }
</style>