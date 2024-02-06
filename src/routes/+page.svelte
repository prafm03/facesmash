<script>
    import Picker from "$lib/components/picker.svelte";
    export let data;
    let { options } = data;
</script>

<svelte:head>
    <title>Who Is Hotter?</title>
</svelte:head>

<Picker {options} />
