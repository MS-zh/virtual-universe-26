import { readFileSync } from "node:fs";

const word = process.argv[2];
if (!word) {
  console.error("Usage: npm run search -- <word>");
  process.exit(1);
}

const notes = JSON.parse(
  readFileSync(new URL("./notes/keynote-highlights.json", import.meta.url), "utf8")
);

const needle = word.toLowerCase();
for (const highlight of notes.highlights) {
  if (
    highlight.title.toLowerCase().includes(needle) ||
    highlight.summary.toLowerCase().includes(needle)
  ) {
    console.log(`- ${highlight.title} (${highlight.topic})`);
    console.log(`    ${highlight.summary}`);
  }
}
