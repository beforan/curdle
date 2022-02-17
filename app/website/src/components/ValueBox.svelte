<script lang="ts">
  export let borderless = false;
  export let active = false;
  export let rounded = false;
  export let bg: string | null = null;
  export let state: boolean | null | undefined = undefined; // eesh it's a 4 state boolean...
</script>

<div
  style={bg ? `--bg: ${bg};` : ""}
  class:borderless
  class:active
  class:rounded
  class:missing={state === false}
  class:partial={state === null}
  class:success={state === true}
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
    color: var(--fg-color);
    font-weight: bold;
    font-size: 1.6em;
    border-width: 2px;
    border-color: var(--value-border-color);
    border-style: solid;
    background-color: var(--bg, inherit);
    user-select: none;
  }

  .borderless {
    border-color: rgba(0, 0, 0, 0);
  }

  .active {
    border-color: var(--value-active);
  }

  .rounded {
    border-radius: 0.2em;
  }

  .missing {
    background-color: var(--value-missing);
  }

  .partial {
    background-color: var(--value-partial);
    border-color: var(--value-partial);
  }

  .success {
    background-color: var(--value-success);
    border-color: var(--value-success);
  }
</style>
