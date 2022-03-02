<script lang="ts">
    import Header from '$lib/header/Header.svelte';
    import Footer from '$lib/footer/Footer.svelte';
    import '../app.css';
</script>

<svelte:head>
    <link rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css">
</svelte:head>

<Header/>

<main>
    <slot/>
</main>

<Footer/>


<style>
    main {
        display: flex;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        box-sizing: border-box;
        justify-content: center;
        padding: 0 1em;
    }
</style>
