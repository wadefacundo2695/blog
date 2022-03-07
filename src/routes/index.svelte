<script context="module" lang="ts">
    import {base} from "$app/paths";
    import Paginator from "$lib/paginator/Paginator.svelte";

    export const prerender = true;

    export let currentPage = 0;

    export async function load({params, fetch}) {
        const posts = await fetch(`${base}/posts/get-posts`)
            .then((r) => r.json());
        return {
            props: {posts}
        };
    }
</script>

<script lang="ts">
    export let posts;
</script>

<svelte:head>
    <title>Inicio</title>
</svelte:head>

<section>
    <div class="title">
        <h1>tuzi</h1>
        <p>{posts.length} posts</p>
    </div>

    {#each posts as post}
        <h2>
            <a sveltekit:prefetch href={`${base}/posts/${post.slug}`}>{post.title}</a>
        </h2>
        <p>{post.preview}</p>
    {/each}

    <Paginator currentPage={currentPage}/>
</section>

<style>
    .title {
        margin: 0 0 1em 0;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 100%;
        max-width: var(--column-width);
    }

    h1 {
        display: flex;
        margin: 0.5em 0 0;
        color: var(--heading-color);
    }

    h2 {
        margin: 1em 0 0 0;
    }

    h2 a {
        font-size: x-large;
        color: var(--heading-color);
        transition: color 0.1s linear;
    }

    h2 a:focus, a:hover {
        text-decoration: none;
        color: var(--accent-color);
    }

    p {
        color: var(--primary-color);
        margin: 0;
    }
</style>
