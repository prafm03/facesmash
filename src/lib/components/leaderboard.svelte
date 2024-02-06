<script>
    export let records;

    function ordinal_suffix_of(i) {
        let j = i % 10,
            k = i % 100;
        if (j === 1 && k !== 11) {
            return "st";
        }
        if (j === 2 && k !== 12) {
            return "nd";
        }
        if (j === 3 && k !== 13) {
            return "rd";
        }
        return "th";
    }
</script>

<div class="flex justify-center font-mono">
    <div class="grid grid-cols-1 gap-6 rounded-full p-6 md:grid-cols-3">
        {#each records as record, index (index)}
            <div class="relative">
                <div
                    class="absolute bottom-0 left-0 flex h-1/5 w-full items-center justify-center bg-black bg-opacity-60 text-white"
                >
                    <div class="inline-flex flex-col items-center">
                        <p class="text-2xl">
                            {index + 1}<span class="text-sm"
                                >{ordinal_suffix_of(index + 1)}</span
                            >
                        </p>
                        <p class="text-xs">
                            (elo {record.eloScore})
                        </p>
                    </div>
                </div>
                <img
                    class="h-auto max-w-full"
                    src="https://praful.pockethost.io/api/files/{record.collectionId}/{record.id}/{record.profilePhoto}?thumb=400x400"
                    alt="person"
                />
            </div>
        {/each}
    </div>
</div>
