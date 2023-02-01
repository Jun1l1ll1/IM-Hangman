
<script>
    import { fails, right, wrong, theWord } from '$lib/stores';

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ';
    let hide = false;


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
    

    // @ts-ignore
    function keyDown(e) {
        if ('abcdefghijklmnopqrstuvwxyzæøå'.includes(e.key)) {
            checkKey(e.key.toUpperCase());
        };
    }


    // @ts-ignore
    function checkKey(key) {
        if (!wrongLetters.includes(key)) {
            if (theWord.includes(key)) { 
                right.update(value => value + key);
            } else {
                wrong.update(value => value + key);
                failNum < 6 ? fails.update(value => value + 1) : '';
            }

            wrong.subscribe(value => {
                wrongLetters = value;
            })
            right.subscribe(value => {
                rightLetters = value;
            })
            fails.subscribe(value => {
                failNum = value;
            })
            console.log(failNum, wrongLetters, rightLetters);
        }
    }
</script>



<div class:bottom-14="{hide}" class="{!hide ? 'sm:bg-zinc-800' : ''} h-fit w-full sm:w-[40rem] px-5 sm:p-2 rounded-lg lg:h-full lg:w-fit">
    <div class:h-screen="{hide}" class:py-16="{hide}" class="lg:p-0 rounded-lg w-full lg:w-44 h-fit lg:h-full text-3xl sm:text-4xl grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-3 gap-2 sm:gap-4">

        {#each alphabet as key}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => checkKey(key)} class:hidden="{hide}" class="bg-zinc-800 sm:bg-zinc-900 hover:bg-black hover:text-red-500 w-full h-fit py-3 sm:py-2 text-center rounded-lg">{key}</div>
        {/each}

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => hide = !hide} class:col-span-2="{hide}" class:col-start-2="{hide}" class:hidden="{!hide}" class="{!hide ? 'sm:bg-zinc-900' : ''} sm:block bg-zinc-800 sm:bg-zinc-900 lg:bg-zinc-900 text-zinc-700 hover:bg-black hover:text-red-500 w-full h-fit py-3 sm:py-2 text-center rounded-lg place-self-end">{#if hide}+{:else}-{/if}</div>

    </div>
</div>





<svelte:window on:keydown={keyDown}/>
