<script lang="ts">
    export let currentPage = 0;
    const startIndex = 1;
    const finishIndex = 10;

    function getClass(): string {
        return 'both';
    }
</script>

<div class="{getClass()}">
    {#if startIndex != 0}
        <span>← Más recientes</span>
    {/if}

    <span>Más antiguos →</span>
</div>

<style>
    div {
        padding: 3rem 0;
        display: flex;
        margin: 1em 0 1em 0;
    }

    .older {
        justify-content: flex-end;
    }

    .newer {
        justify-content: flex-start;
    }

    .both {
        justify-content: space-between;
    }

    span {
        transition: filter 0.1s linear;
    }

    span:hover,
    span:focus {
        cursor: pointer;
        filter: invert(57%) sepia(76%) saturate(631%) hue-rotate(188deg) brightness(97%) contrast(83%);
    }
</style>