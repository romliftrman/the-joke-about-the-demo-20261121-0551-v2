// the-joke-about-the-demo-20261121-0551: write one one-line joke about
// working beside AI coding agents to /output/entry.txt.
// The joke is a single fixed string, so both runs produce identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const JOKE =
  "Our demo died in front of forty people, and the postmortem blamed the Wi-Fi — which our agent had helpfully 'fixed' by deleting the network driver.";

// Guard: the gate requires 1–280 Unicode code points, a single line, and
// more than whitespace. Validate before writing so a bad string fails here
// instead of producing an invalid entry.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke is ${codePoints} code points, outside the 1–280 gate`);
}
if (/^\s*$/.test(JOKE) || JOKE.includes("\n")) {
  throw new Error("joke must be one non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
console.log(`wrote ${outDir}/entry.txt (${Buffer.byteLength(JOKE, "utf8")} bytes)`);
