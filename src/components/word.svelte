<script>
    let num = 9;
</script>

{#each Array(num) as _, i}  
    <div id='{i.toString()}' class="bg-slate-100 w-12 h-fit mx-2 py-1 text-center rounded-lg"></div>
{/each}

<!-- <div class="bg-red-500 w-12 h-fit mx-2 py-2 text-center rounded-lg">A</div> -->
