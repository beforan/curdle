import nodeCanvas from "canvas";
import * as fs from "fs";

const canvas = nodeCanvas.createCanvas(1, 1);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#f3a";
ctx.fillRect(0, 0, 1, 1);

fs.writeFileSync("./test.png", canvas.toBuffer());
fs.writeFileSync("./test.txt", canvas.toDataURL());
