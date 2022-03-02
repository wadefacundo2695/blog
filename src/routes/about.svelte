<script context="module">
    import {browser, dev} from '$app/env';

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;
</script>

<section>
    <h1>Facundo Wade</h1>

    <p>
        Texto de prueba
    </p>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 100%;
        max-width: var(--column-width);
    }

    h1 {
        display: flex;
        margin: 0.5em 0 0.5em;
        color: var(--heading-color);
    }

    h2 {
        font-size: x-large;
        margin: 1em 0 0 0;
        color: var(--heading-color);
    }

    p {
        margin: 0;
    }
</style>
