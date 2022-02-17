<script>
  export let tall = false;
  export let long = false;
  export let key;

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("game-keydown", { detail: { key } }));
  };
</script>

<button on:click={handleClick} class:tall class:long>
  <slot>
    {key}
  </slot>
</button>

<style>
  button {
    font-size: 1.4em;
    background-color: var(--button-color);
    padding: 0.5em;
    border-radius: 5px;
    border-width: 0;
    text-align: center;
    color: var(--fg-color);
    font-weight: bold;
    line-height: 0;
    min-height: 48px;
    cursor: pointer;
    user-select: none;
  }
  button:hover {
    background: var(--button-hover);
    transition: background-color linear 0.02s;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  button:active {
    background: var(--button-active);
    transition: background-color linear 0.02s;
  }
  button:focus {
    outline: none;
  }
  /* special case for SVG color rather than html elements*/
  button :global(svg) {
    fill: var(--fg-color);
  }

  .long {
    grid-column: auto / span 2;
  }

  .tall {
    grid-row: auto / span 2;
  }
</style>
