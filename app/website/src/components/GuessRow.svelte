<script context="module">
  import { writable } from "svelte/store";

  let currentGuess = writable(0);
</script>

<script lang="ts">
  import { getTodaysColorValue } from "../lib/today";

  import ValueBox from "./ValueBox.svelte";

  export let key: number;
  $: isCurrent = $currentGuess === key;
  $: {
    console.log($currentGuess);
  }

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
      results = [true, true, true, true, true, true];
      $currentGuess = -1; // no more guesses
    } else {
      const arrColor = color.substring(1).split("");
      const arrToday = today.substring(1).split("");
      results = arrColor.map((c, i) => {
        if (c === arrToday[i]) return true;
        if (arrToday.includes(c)) return null;
        return false;
      });
      $currentGuess++;
    }
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
    <ValueBox active={isCurrent && i === currentValue} state={results[i]}>{v}</ValueBox>
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
