/**
 * Events wiring for physical keyboard press events.
 *
 * Essentially hooks these keypresses up to dispatch common custom events
 * the same as the soft keypad buttons
 */
const validCodes = [
  "Digit0",
  "Numpad0",
  "Digit1",
  "Numpad1",
  "Digit2",
  "Numpad2",
  "Digit3",
  "Numpad3",
  "Digit4",
  "Numpad4",
  "Digit5",
  "Numpad5",
  "Digit6",
  "Numpad6",
  "Digit7",
  "Numpad7",
  "Digit8",
  "Numpad8",
  "Digit9",
  "Numpad9",
  "KeyA",
  "KeyB",
  "KeyC",
  "KeyD",
  "KeyE",
  "KeyF",
  "Enter",
  "Backspace",
];

window.addEventListener("keydown", (e) => {
  if (!validCodes.includes(e.code)) return;

  e.preventDefault(); // don't want Backspace or Enter to do anything special

  // chuck out any keydown event code cruft
  const key = ["Digit", "Numpad", "Key"].reduce(
    (code, prefix) => code.replace(prefix, ""),
    e.code
  );

  window.dispatchEvent(new CustomEvent("game-keydown", { detail: { key } }));
});

export {}
