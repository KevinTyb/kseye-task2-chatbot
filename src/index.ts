/**
 * CLI entry point
 * Responsible for input/output only
 */

import { detectIntent } from "./matcher";
import { respond } from "./responder";
import { extractEntities } from "./utils";

function getUserInput(): string {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    return "";
  }
  return args.join("");
}

function main(): void {
  const input = getUserInput();

  if (!input) {
    console.log(
      [
        "Please provide a question.",
        "",
        "Example:",
        '  npm run start -- "Where can I find the latest lending criteria?"',
      ].join("\n"),
    );
    return;
  }

  const entities = extractEntities(input);
  const match = detectIntent(input);
  const response = respond(match, entities);

  console.log(response);
}

main();
