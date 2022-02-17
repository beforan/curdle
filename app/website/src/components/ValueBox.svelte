<script lang="ts">
  export let borderless = false;
  export let active = false;
  export let rounded = false;
  export let bg: string | null = null;
</script>

<div
  style={bg ? `--bg: ${bg};` : ""}
  class:borderless
  class:active
  class:rounded
>
  <slot />
</div>

<style>
  div {
    width: 100%;
    line-height: 1.6em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.6em;
    border-width: 2px;
    border-color: #777;
    border-style: solid;
    background-color: var(--bg, inherit);
  }

  .borderless {
    border-color: rgba(0,0,0,0);
  }

  .active {
    border-color: #0c0;
  }

  .rounded {
    border-radius: 0.2em;
  }
</style>
