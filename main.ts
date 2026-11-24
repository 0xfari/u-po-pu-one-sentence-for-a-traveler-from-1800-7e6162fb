import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, at most 200 characters, explaining the modern internet
// to a traveler from 1800, built only from things they already know:
// the printing press, a letter, a road, the light of day. Writes it
// to /output/entry.txt with no trailing newline.
// The press is the whole comparison: anyone may print, anyone may read, at once.
// "Before supper" is the clock a traveler from 1800 would trust: one day, one meal.
const LINE =
  "It is a printing press in every house, joined to every other by roads of light, so a letter written at your table may be read in every town before supper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
