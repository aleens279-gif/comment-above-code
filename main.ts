// The Comment Above the Code — writes one line to /output/entry.txt
// Gate: 91 chars (max 200), one line, no trailing newline.
// A TODO comment that outlived every promise made about it.
// (Verified: 91 chars, gate max 200.)
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "// TODO: fix this before",
  "anyone notices. Written",
  "in 2019. It is",
  "now 2026. Everyone",
  "noticed.",
];

// Join the parts with single spaces into the final line.
const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
