<script>
    import { fails, wrong } from '$lib/stores';

    let wrongLetters = '';
    wrong.subscribe(value => {
        wrongLetters = value;
    })

</script>

{#each wrongLetters as key}
    <div class="bg-zinc-700 w-full h-fit py-2 text-center rounded-lg">{key}</div>
{/each}