import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Error 04: I have eaten one sock. The other is not my problem.";

// Gate validation: one line, 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
