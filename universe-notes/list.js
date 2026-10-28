import { readFileSync } from "node:fs";

const notes = JSON.parse(
  readFileSync(new URL("./notes/keynote-highlights.json", import.meta.url), "utf8")
);

const byTopic = new Map();
for (const highlight of notes.highlights) {
  if (!byTopic.has(highlight.topic)) byTopic.set(highlight.topic, []);
  byTopic.get(highlight.topic).push(highlight.title);
}

for (const [topic, titles] of byTopic) {
  console.log(topic);
  for (const title of titles) console.log(`  - ${title}`);
}
