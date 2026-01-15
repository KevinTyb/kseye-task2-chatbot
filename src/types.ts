/**
 * Shared types
 * Types in one place allows future extension of the project
 */

export type Intent =
  | "LENDING_CRITERIA"
  | "PRICING_MATRIX_HELP"
  | "FUNDING_CALCULATOR_HELP"
  | "APPLICATION_STATUS"
  | "NEW_STARTER_ACCESS"
  | "TEMPLATE_LETTER_HELP"
  | "UPDATE_CUSTOMER_EMAIL"
  | "UNKNOWN";

export interface IntentDefinition {
  intent: Intent;
  keywords: string[];
}

export interface MatchResult {
  intent: Intent;
  score: number;
  matchedKeywords: string[];
}

export interface Entities {
  // Separate type due to parsing/extraction in utils.ts
  emails: string[];
  applicationIds: string[];
}
