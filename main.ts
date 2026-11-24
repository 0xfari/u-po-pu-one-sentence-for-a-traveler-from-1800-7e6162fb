import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, at most 200 characters, explaining the modern internet
// to a traveler from 1800, built only from things they already know:
// roads, the post office, a library. Writes it to /output/entry.txt.
const LINE =
  "Imagine every road on earth joined into one, carrying letters that arrive in a blink, and a library that answers the moment you ask it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
