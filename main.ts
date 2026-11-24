// A traveler from 1800 already knows a printing press, a letter, and a road.
// This program explains the internet with nothing else: one sentence, built
// from those three familiar things, and saved to entry.txt with no newline
// at the end, so the file is exactly the sentence and nothing more.
import * as fs from "node:fs";
import * as path from "node:path";

// The press does the explaining by itself: one in every house means
// nobody waits for a printer, and nobody asks whose turn it is to read.
const OPENING =
  "It is a printing press in every house, joined to every other by roads of light, ";
const CLOSING =
  "so a letter written at your table may be read in every town before supper.";

function emptyFolder(folder) {
  for (const name of fs.readdirSync(folder)) {
    fs.rmSync(path.join(folder, name), { recursive: true, force: true });
  }
}

// Supper is the traveler's clock: a letter that arrives before the meal
// has crossed the whole country in less time than a walk to the market.
function run() {
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(target, { recursive: true });
  emptyFolder(target);
  fs.writeFileSync(path.join(target, "entry.txt"), OPENING + CLOSING, "utf8");
}

run();
