import { writable } from "svelte/store";

const now = new Date().toISOString();
const today = now.substring(0, now.indexOf("T"));

const color = writable(null);

const getTodaysColorValue = () => {
  const canvas = document.createElement("canvas");
  const i = new Image(1, 1);

  const ctx = canvas.getContext("2d");

  i.onload = () => {
    ctx.drawImage(i, 0, 0);

    const id = ctx.getImageData(0, 0, 1, 1);
    const [r, g, b] = id.data;

    color.set(`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`);
  };
  // i.src = `/${today}.png`; // TODO
  i.src = `/test.png`;
};

const export_color = { subscribe: color.subscribe };

getTodaysColorValue();

export { today, export_color as color };
