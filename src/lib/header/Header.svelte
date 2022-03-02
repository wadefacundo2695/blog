<script lang="ts">
    import {page} from '$app/stores';
</script>

<header>
    <nav>
        <ul>
            <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Inicio</a></li>
            <li class:active={$page.url.pathname === '/about'}>
                <a sveltekit:prefetch href="/about">Sobre mí</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
        display: flex;
        justify-content: center;
        padding: 0 1em;
        background: white;
    }

    nav {
        display: flex;
        width: 100%;
        max-width: var(--column-width);
        margin: var(--nav-margin-top) auto 0 auto;
        border-bottom: 1px solid lightgray;
    }

    ul {
        width: 100%;
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        color: var(--heading-color);
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--accent-color);
    }
</style>
