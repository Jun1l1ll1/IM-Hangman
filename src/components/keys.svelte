
<script>
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ';
    let hide = true;

    // @ts-ignore
    function keyDown(e) {
        if ('abcdefghijklmnopqrstuvwxyzæøå'.includes(e.key)) {
            checkKey(e.key.toUpperCase());
        };
    }


    // @ts-ignore
    function checkKey(key) {
        console.log(key);
    }
</script>





{#each alphabet as key}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => checkKey(key)} class:hidden="{hide}" class="bg-zinc-900 hover:bg-black hover:text-red-500 w-full h-fit py-2 text-center rounded-lg">{key}</div>
{/each}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => hide = !hide} class:col-span-2="{hide}" class:col-start-2="{hide}" class="bg-zinc-900 text-zinc-700 hover:bg-black hover:text-red-500 w-full h-fit py-2 text-center rounded-lg place-self-end">{#if hide}+{:else}-{/if}</div>







<svelte:window on:keydown={keyDown}/>
