<script lang="ts">
  import ColorPreview from "./components/ColorPreview.svelte";
  import GuessesGrid from "./components/GuessesGrid.svelte";
  import Header from "./components/Header.svelte";
  import Keypad from "./components/Keypad.svelte";
  import Theme from "./components/Theme.svelte";
</script>

<Theme />

<div id="grid-layout">
  <Header />

  <main>
    <GuessesGrid />

    <section class="bottom">
      <Keypad />
      <ColorPreview />
    </section>
  </main>
</div>

<style>
  :root {
    background-color: var(--bg-color);
    color: var(--fg-color);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  #grid-layout {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: stretch;
  }

  main {
    display: grid;
    grid-template-rows: 1fr auto;
    justify-items: center;
    align-items: center;
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5px;
    grid-gap: 5px;
  }
</style>
