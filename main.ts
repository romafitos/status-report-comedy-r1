// Status Report Comedy Sprint entry: writes one status-report line to /output/entry.txt.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Calendar: moved your 3pm to 4, your 4pm to 5, and the rest of your life back an hour. No conflicts found.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";

if (LINE.trim().length === 0 || [...LINE].length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
