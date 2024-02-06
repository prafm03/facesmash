<div class="flex justify-center font-mono">
    <form>
        <input type="file" id="inputfile" class="hidden" />
    </form>
    <button
        on:click={() => document.getElementById("inputfile").click()}
        id="fileSelector"
        class="font-bold text-blue-500 hover:text-red-500 hover:underline"
    >
        select file(s)
    </button>
</div>
