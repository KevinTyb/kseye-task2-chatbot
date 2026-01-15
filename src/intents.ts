/**
 * Intent definitions containing structured intent data
 */

import { IntentDefinition } from "./types";

export const INTENTS: IntentDefinition[] = [
  {
    intent: "LENDING_CRITERIA",
    keywords: [
      "lending criteria",
      "lending policy",
      "latest criteria",
      "criteria",
      "policy",
      "guidelines",
    ],
  },
  {
    intent: "PRICING_MATRIX_HELP",
    keywords: [
      "pricing matrix",
      "pricing",
      "price",
      "quote",
      "broker enquiry",
      "rate matrix",
    ],
  },
  {
    intent: "FUNDING_CALCULATOR_HELP",
    keywords: [
      "funding calculator",
      "calculator",
      "calculate",
      "funding",
      "repayment",
    ],
  },
  {
    intent: "APPLICATION_STATUS",
    keywords: ["application", "case", "status", "on the system", "reference"],
  },
  {
    intent: "NEW_STARTER_ACCESS",
    keywords: [
      "new starter",
      "onboarding",
      "system access",
      "access request",
      "third-party access",
      "set up account",
    ],
  },
  {
    intent: "TEMPLATE_LETTER_HELP",
    keywords: [
      "template letter",
      "template",
      "letter",
      "fill in the blanks",
      "merge fields",
      "auto-fill",
    ],
  },
  {
    intent: "UPDATE_CUSTOMER_EMAIL",
    keywords: [
      "email address",
      "incorrect email",
      "wrong email",
      "update email",
      "amend email",
      "change email",
      "customer record",
      "broker has called",
    ],
  },
];
