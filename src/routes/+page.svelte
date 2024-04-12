<script>
	export let data;
    import { dragscroll } from '@svelte-put/dragscroll';

</script>

<div class="hideScroll" id="content" use:dragscroll>
    {#each data.summaries as { slug, title, content }, index}
        <div class="guides">
            <h2><a href="/guides/{slug}">{title}</a></h2>
            <p>{content}</p>
        </div>
    {/each}
</div>

<div id="title">
    <h1>Nobu's Guide to Jakarta</h1>
    <p>Wanna visit Jakarta and don't know where to go? Here are a few places nobu would recommend you going to!</p>
</div>


<style>
    #content {
        display: flex;  
        align-items: flex-start;
        overflow: auto;
        cursor: grab;
    }
    .guides {
        flex-shrink: 0;
        position: relative;
        width: 400px;
        padding: 2em;
        margin: 10px;
        background-color: #111;
        height: max-content;
        height: 60vh;
        align-content: end;
        border-radius: 1em;
    }
    #title {
        margin-bottom: 60px;
        margin-left: 60px;
        margin-right: 60px;
    }
    h1 {
        font-size: 5em;
        margin-bottom: 0em;
        font-family: nyghtserif;
        font-weight: bold;
    }
    h2 {
        font-size: 2em;
        margin-top: 0em;
        font-family: nyghtserif;
        font-weight: bold;
    }
    h2 a {
        color: white;
        text-decoration: none;
    }
    h2 a :hover {
        font-size: 2.1em;
    }
    p {
        font-family: spacegrotesk;
    }

    .hideScroll::-webkit-scrollbar { display: none; }
	.hideScroll {
  	-ms-overflow-style: none;  /* IE and Edge */
  	scrollbar-width: none;     /* Firefox */
	}
</style>