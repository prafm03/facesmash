<script>
    import { Confetti } from "svelte-canvas-confetti";
    import { tick } from "svelte";

    export let options;

    let m = { x: 0, y: 0 };

    const handleMousemove = (event) => {
        m.x = event.clientX;
        m.y = event.clientY;
    };

    const handleClick = async (winner) => {
        confetti = false;
        await tick();
        confetti = true;
        await tick();
        window.scroll(0, 0);
        fetch("/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                id1: options[0].id,
                id2: options[1].id,
                id1Won: winner,
            }),
        });
        window.location.href = "/";
    };

    let confetti = false;
</script>

{#if confetti}
    <Confetti origin={[m.x, m.y]} particleCount={250} force={50} />
{/if}

<p class="my-3 flex animate-bounce justify-center font-mono text-red-500">
    🔥 who is hotter? 💦
</p>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mousemove={handleMousemove}>
    <div class="flex justify-center font-mono">
        <form class="grid grid-cols-1 gap-12 rounded-full p-6 md:grid-cols-2">
            <button class="relative" on:click={() => handleClick(1)}>
                <div
                    class="absolute bottom-0 left-0 flex h-full w-full items-center justify-center text-8xl text-white text-opacity-0 hover:bg-black hover:bg-opacity-60 hover:text-opacity-100"
                >
                    🍆
                </div>
                <img
                    class="h-auto max-w-full"
                    src="https://praful.pockethost.io/api/files/{options[0]
                        .collectionId}/{options[0].id}/{options[0]
                        .profilePhoto}?thumb=400x400"
                    alt="face"
                />
            </button>
            <button class="relative" on:click={() => handleClick(0)}>
                <div
                    class="absolute bottom-0 left-0 flex h-full w-full items-center justify-center text-8xl text-white text-opacity-0 hover:bg-black hover:bg-opacity-60 hover:text-opacity-100"
                >
                    🍆
                </div>
                <img
                    class="h-auto max-w-full"
                    src="https://praful.pockethost.io/api/files/{options[1]
                        .collectionId}/{options[1].id}/{options[1]
                        .profilePhoto}?thumb=400x400"
                    alt="face"
                />
            </button>
        </form>
    </div>
</div>
