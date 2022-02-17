<script>
  import Drawer from "svelte-drawer-component";
  let open = false;
</script>

<div>
  <Drawer {open} placement="bottom" size="90vh">
    <div class="close">
      <button class="close" on:click={() => (open = false)}>&times;</button>
    </div>
    <div>
      <slot name="drawer" />
    </div>
  </Drawer>

  <button on:click={() => (open = true)}>
    <slot name="button" />
  </button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    background-blend-mode: lighten;
  }

  button {
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--fg-color);
  }

  button.close {
    font-size: 2em;
    padding: 10px;
  }

  div.close {
    justify-content: end;
  }

  div :global(.drawer .panel) {
    background: var(--bg-accent);
  }
</style>
