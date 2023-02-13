<script>
    import words from "$lib/data/words.json";
    import { right, wrong, theWord, fails, hasWon } from '$lib/stores';

    let word = '';
    let wordURL = '';
    theWord.subscribe(value => {
        word = value;

        wordURL = 'https://www.google.com/search?q=';
        for (let l of word.toLowerCase()) {
            if (l === ' ') {
                l = '+';
            }
            wordURL += l;
        }
    })
    
    let wrongLetters = '';
    wrong.subscribe(value => {
        wrongLetters = value;
    })
    let rightLetters = '';
    right.subscribe(value => {
        rightLetters = value;
    })
    let failNum = 0;
    fails.subscribe(value => {
        failNum = value;
    })
    let won = false;
    hasWon.subscribe(value => {
        won = value;
    })


    function reset() {
        fails.set(0);
        right.set('');
        wrong.set('');
        hasWon.set(false);
        theWord.set(words[Math.floor(Math.random() * (words.length))].toUpperCase());
    }

</script>
<style>
    a:hover {
        text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
        color: #ef4444;
    }
</style>

<div class="{(failNum != 6 && !won) ? 'hidden' : ''} absolute w-screen h-screen bg-zinc-900/50 flex items-center justify-center space-x-10 lg:left-[-2.5rem]">
    <div class="bg-red-500 absolute h-4/5 w-4/5 rounded-lg">
        <div class="bg-zinc-800 absolute inset-1 rounded grid grid-cols-1">

            <div class="flex items-center justify-center">
                <div>
                    <div class="w-full flex items-center justify-center">
                        <h1 class="text-6xl {failNum == 6 ? 'text-red-500' : 'text-green-500'}">{#if failNum != 6}Bra jobba!{:else}Prøv igjen..{/if}</h1>
                    </div>
                    <div class="w-full flex items-center justify-center mt-5">
                            <h1 class="text-3xl">Ordet var: <a href="{wordURL}" target="_blank" rel="noreferrer"><b>{word}</b></a></h1>
                    </div>
                </div>
            </div>

            <div class="w-full flex items-center justify-center">
                <table class="h-full table-fixed w-2/3">
                    <tbody>
                        <tr>
                            <td>
                                <img class="w-full" src="src/lib/images/kliff/kliff-{failNum}.png" alt="Mann = {failNum}/6"/>
                            </td>
                            <td>
                                <span class="{failNum <= 3 ? 'text-green-500' : failNum <= 5 ? 'text-yellow-500' : 'text-red-500'}">{failNum}/6</span> fails <br>
                                <div class="w-full">
                                {#each wrongLetters as key}
                                    <div class="inline-block bg-zinc-700 w-8 lg:w-10 xl:w-12 h-fit py-1 lg:py-2 mr-2 text-center rounded-lg text-2xl lg:text-3xl xl:text-4xl">{key}</div>
                                {/each}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-full flex items-center justify-center">
                <button on:click={reset} class="bg-red-500 hover:bg-black hover:text-red-500 p-4 rounded-lg text-4xl">Fortsett</button>
            </div>
            
        </div>
    </div>
</div>