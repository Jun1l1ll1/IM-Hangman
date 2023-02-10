
<script>
    import { right, wrong, theWord } from '$lib/stores';

    let word = '';
    let num = 0;
    theWord.subscribe(value => {
        word = value;
        num = value.length;
    })
    console.log(word);

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
    {#if word[i] === " "}
        <div id='{i.toString()}' class="_space w-12 h-fit mx-2 py-0.5 sm:py-1 text-center rounded-lg"></div>
    {:else}
        <div id='{i.toString()}' class="{rightLetters.includes(word[i]) ? 'bg-red-500' : 'bg-slate-100'} w-8 sm:w-12 inline-block h-fit mx-2 py-1 text-center rounded-lg">{#if rightLetters.includes(word[i])}{word[i]}{/if}</div>
    {/if}
{/each}


<!-- <div class="bg-red-500 w-12 h-fit mx-2 py-1 text-center rounded-lg">A</div> -->
