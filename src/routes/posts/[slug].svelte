<script context="module">
    import {base} from "$app/paths";

    export async function load({params, fetch}) {
        const slug = params.slug;
        const post = await fetch(`${base}/posts/${slug}.json`)
            .then((r) => r.json());
        return {
            props: {post}
        };
    }
</script>
<script>
    export let post;
    let date = post.metadata.date.toUpperCase();
    let autor = post.metadata.autor;
</script>

<svelte:head>
    <title>{post.metadata.title}</title>
</svelte:head>

<section>
    <h1 class="title">{post.metadata.title}</h1>
    <p class="info"><a href="https://github.com/wadeFacundo1">{autor}</a> {date}</p>
    {@html post.content}
</section>

<style lang="scss">
  section :global(h1) {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0;
  }

  section :global(hr) {
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    max-width: var(--column-width);
  }

  section :global(blockquote) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-left: 0.2rem solid #ccc;
    padding: 0.5em 10px;
    background: #f5f5f5
  }

  section :global(code) {
    font-size: 1rem;
    overflow-x: auto;
    color: #333;
    background: #f8f8f8;
  }

  section :global(table) {
    padding: 0.6em;
    border: 1px solid lightgray;
    border-collapse: collapse;
  }

  section :global(thead) {
    padding: 0.6em;
    border: 1px solid lightgray;
    border-collapse: collapse;
  }

  section :global(tbody) {
    padding: 0.6em;
    border: 1px solid lightgray;
    border-collapse: collapse;
  }

  section :global(th) {
    padding: 0.6em;
    border: 1px solid lightgray;
    border-collapse: collapse;
  }

  section :global(tr) {
    padding: 0.6em;
    border: 1px solid lightgray;
    border-collapse: collapse;
  }

  section :global(td) {
    padding: 0.6em;
    border: 1px solid lightgray;
    border-collapse: collapse;
  }

  section :global(img) {
    max-width: min(100%, var(--column-width));
    display: flex;
    margin: 0 auto;
  }
</style>