<script>
  import GuessRow from "./GuessRow.svelte";
</script>

<section>
  {#each [0, 1, 2, 3, 4, 5] as key}
    <GuessRow {key} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    width: 375px;
    height: 350px;
    grid-gap: 5px;
    padding: 2px;
  }
</style>
