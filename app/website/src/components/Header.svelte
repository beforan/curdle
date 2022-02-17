<script>
  import Heading from "./Heading.svelte";

  import Help from "./Help.svelte";
  import Settings from "./Settings.svelte";
</script>

<header>
  <Help />
  <Heading />
  <Settings />
</header>

<style>
  header {
    background-color: var(--bg-accent);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: thin solid var(--value-border-color);
    padding: 5px;
  }
</style>
