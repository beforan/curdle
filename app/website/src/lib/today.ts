const now = new Date().toISOString();
export const today = now.substring(0, now.indexOf("T"));

// promise wrap img.onload so we can await it
const loadImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", reject);
    img.src = url;
  });

// effectively singleton the color value for efficiency
// so we don't go around making repeat network requests
// and image and canvas elements and stuff
let color = null;

const setColorValue = async () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const img = await loadImage("/test.png"); //`/${today}.png`; // TODO

  ctx.drawImage(img, 0, 0);

  const id = ctx.getImageData(0, 0, 1, 1);
  const [r, g, b] = id.data;

  color = `#${[r, g, b].map((c) => c.toString(16).toUpperCase()).join("")}`;
};

export const getTodaysColorValue = async () => {
  if (!color) await setColorValue();
  return color;
};
