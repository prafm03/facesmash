<script>
    import Leaderboard from "$lib/components/leaderboard.svelte";
    export let data;
    let { records } = data;
</script>

<svelte:head>
    <title>Female Leaderboards</title>
</svelte:head>

<Leaderboard {records} />
