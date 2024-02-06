<script>
    import Leaderboard from "$lib/components/leaderboard.svelte";
    export let data;
    let { records } = data;
</script>

<svelte:head>
    <title>Male Leaderboards</title>
</svelte:head>

<Leaderboard {records} />
