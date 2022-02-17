<script>
  import Drawer from "svelte-drawer-component";
  let open = false;
  export let placement;
</script>

<div>
  <Drawer {open} {placement}>
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
  }

  button {
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  button.close {
    font-size: 2em;
    padding: 10px;
    color: #fff;
  }

  div.close {
    justify-content: end;
  }

  div :global(.drawer .panel) {
    background: #111;
    color: #fff;
  }
</style>
