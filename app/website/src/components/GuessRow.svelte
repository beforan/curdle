<script context="module">
  let currentGroup = 0;
</script>

<script lang="ts">
  import { getTodaysColorValue } from "../lib/today";

  import ValueBox from "./ValueBox.svelte";

  export let key: number;
  $: isCurrent = currentGroup === key;

  let currentValue = 0;
  let values = ["", "", "", "", "", ""];
  let results = [];

  $: color = `#${values.map((v) => v || "0").join("")}`;

  let invalid = false;

  //#region Event Handlers
  const handleEnterKey = async () => {
    // if any falsey values; can't submit
    if (values.some((v) => !v)) {
      invalid = true; // triggers an animation
      setTimeout(() => (invalid = false), 200);
      return;
    }

    const today = await getTodaysColorValue();
    if (color === today) {
      console.log("YAY");
    } else console.log("BOO", color, today);
  };

  const handleBackspaceKey = () => {
    if (currentValue > 0) currentValue--;
    values[currentValue] = "";
  };

  const handleValueKey = (value: string) => {
    if (currentValue > 5) return;
    values[currentValue] = value;
    currentValue++;
  };

  $: handleKeydown = isCurrent
    ? ({ detail: { key } }) => {
        switch (key) {
          case "Enter":
            return handleEnterKey();
          case "Backspace":
            return handleBackspaceKey();
          default:
            return handleValueKey(key);
        }
      }
    : () => {}; // noop if we're not the current group
  //#endregion
</script>

<svelte:window on:game-keydown={handleKeydown} />

<section class="row" class:shake={invalid}>
  <ValueBox borderless>#</ValueBox>
  {#each values as v, i}
    <ValueBox active={isCurrent && i === currentValue}>{v}</ValueBox>
  {/each}
  <ValueBox borderless rounded bg={color} />
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1em repeat(7, 1fr);
    grid-gap: 5px;
  }

  .shake {
    animation: shake 0.2s;
  }

  @keyframes shake {
    0% {
      transform: translate(-3px, 0);
    }
    25% {
      transform: translate(3px, 0);
    }
    50% {
      transform: translate(-3px, 0);
    }
    75% {
      transform: translate(3px, 0);
    }
    100% {
      transform: translate(-3px, 0);
    }
  }
</style>
