<script>
    import NotRightBox from "../components/notRightBox.svelte";
    import Keys from "../components/keys.svelte";
    import Word from "../components/word.svelte";

    import checkKey from '../components/keys.svelte';

    let fails = 6;

</script>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.zinc.800);
        color: theme(colors.slate.100);

    }
</style>



<div class="flex items-center justify-center w-screen h-screen p-10 space-x-10">
    <div class="rounded-lg w-44 h-full text-4xl grid grid-cols-3 gap-4">
        <Keys />
    </div>




    <div class="bg-zinc-900 p-5 rounded-lg w-[45rem] h-full">

        <div class="flex items-center justify-center w-full">
            <img class="w-5/6 mt-5" src="src/lib/images/kliff/kliff-{fails}.png" alt="Mann = {fails}/6">
        </div>
        
        <div class="w-full h-16 mt-20 flex items-end justify-center text-5xl">
            <Word />
        </div>
    </div>




    <div class="bg-zinc-900 rounded-lg w-32 h-full">
        <div class="p-4 text-4xl grid grid-cols-2 gap-4 max-h-full overflow-scroll">
            <NotRightBox />
        </div>
    </div>
</div>

