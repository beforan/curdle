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
    color: #fff;
    background-color: #111;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: thin solid #555;
    padding: 5px;
  }
</style>
