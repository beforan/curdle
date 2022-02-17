<script>
  export let tall = false;
  export let long = false;
  export let key;

  const handleClick = () => {
    document.dispatchEvent(
      new CustomEvent("game-keydown", { detail: { key } })
    );
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
    background-color: darkgray;
    padding: 0.5em;
    border-radius: 5px;
    border-width: 0;
    text-align: center;
    color: #fff;
    font-weight: bold;
    line-height: 0;
    min-height: 48px;
    cursor: pointer;
    user-select: none;
  }
  button:hover {
    background: lightsteelblue;
    transition: background-color linear 0.02s;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  button:active {
    background: steelblue;
    transition: background-color linear 0.02s;
  }
  button:focus {
    outline: none;
  }
  /* special case for SVG color rather than html elements*/
  button :global(svg) {
    fill: #fff;
  }

  .long {
    grid-column: auto / span 2;
  }

  .tall {
    grid-row: auto / span 2;
  }
</style>
