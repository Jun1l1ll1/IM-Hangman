<script>
    import NotRightBox from "../components/notRightBox.svelte";
    import Keys from "../components/keys.svelte";
    import Word from "../components/word.svelte";
    import WinLose from "../components/winLose.svelte";

    import { fails } from '$lib/stores';



    let failNum = 0;
    fails.subscribe(value => {
        failNum = value;
    })


</script>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.zinc.800);
        color: theme(colors.slate.100);
    }
</style>
<div class="flex items-center justify-center w-screen h-screen p-2 sm:p-10 lg:space-x-10">

    <div class="h-fit sm:h-full w-full lg:w-fit absolute bottom-12 lg:static flex items-center justify-center">
        <Keys />
    </div>




    <div class="bg-zinc-900 p-5 rounded-lg w-full sm:w-[45rem] h-full">

        <div class="flex items-center justify-center w-full">
            <img class="w-5/6 mt-5" src="src/lib/images/kliff/kliff-{failNum}.png" alt="Mann = {failNum}/6">
        </div>
        
        <div class="w-full h-16 mt-6 sm:mt-20 flex-none overflow-x-auto whitespace-nowrap sm:flex sm:items-end sm:justify-center text-2xl sm:text-5xl">
            <Word />
        </div>
    </div>




    <div class="hidden xl:block bg-zinc-900 rounded-lg w-32 h-full">
        <div class="p-4 text-4xl grid grid-cols-2 gap-4 max-h-full overflow-scroll">
            <NotRightBox />
        </div>
    </div>

    <WinLose/>

</div>

