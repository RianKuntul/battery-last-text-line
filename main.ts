// The Battery's Last Text to Its Charger.
// One line of plain text, at most 200 characters, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Self-validates the sealed gate: 1-200 UTF-8 characters, not only
// whitespace, exactly one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "i gave you 100% every morning and you ghosted me all day for a power bank. fine. when it dies too, don't come back — i'll be at 0%, petty, and already flirting with the car charger.";

const chars = [...TEXT].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (TEXT.trim().length === 0 || TEXT.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
