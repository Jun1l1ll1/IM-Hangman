
<script>
    import { right, wrong, theWord } from '$lib/stores';

    let num = theWord.length;
    console.log(theWord);

    let wrongLetters = '';
    wrong.subscribe(value => {
        wrongLetters = value;
    })
    let rightLetters = '';
    right.subscribe(value => {
        rightLetters = value;
    })

</script>

{#each Array(num) as _, i}  
    {#if theWord[i] === " "}
        <div id='{i.toString()}' class="_space w-12 h-fit mx-2 py-0.5 sm:py-1 text-center rounded-lg"></div>
    {:else}
        <div id='{i.toString()}' class:bg-red-500="{rightLetters.includes(theWord[i])}" class="bg-slate-100 w-12 h-fit mx-2 py-1 text-center rounded-lg">{#if rightLetters.includes(theWord[i])}{theWord[i]}{/if}</div>
    {/if}
{/each}

<!-- <div class="bg-red-500 w-12 h-fit mx-2 py-1 text-center rounded-lg">A</div> -->
