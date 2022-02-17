import App from "./App.svelte";

// hook up keydown event listeners in the DOM at the top level
import "./lib/keyboard-events";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
