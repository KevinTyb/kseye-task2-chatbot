/**
 * This file is just for response mapping based off the intent
 */

import type { Entities, MatchResult } from "./types";

function formatList(items: string[]): string {
  return items.map((x) => `- ${x}`).join("\n");
}

export function respond(match: MatchResult, entities: Entities): string {
  switch (match.intent) {
    case "LENDING_CRITERIA": {
      return [
        "Latest lending criteria (source of truth):",
        "- Check the internal intranet/SharePoint lending criteria page (latest version).",
        "- Avoid using saved PDFs or old links, as criteria may have changed.",
        "",
        "If you tell me what product/type of case this relates to, I can point you to the most relevant section.",
      ].join("\n");
    }

    case "PRICING_MATRIX_HELP": {
      return [
        "Pricing Matrix help:",
        "- Open the Pricing Matrix guide on the intranet/knowledge base.",
        "- Confirm the product type and broker/customer details before quoting.",
        "",
        "If you share the product name/type, I can outline the typical steps to locate the correct rate.",
      ].join("\n");
    }

    case "FUNDING_CALCULATOR_HELP": {
      return [
        "Funding Calculator help:",
        "- Open the Funding Calculator tool from the intranet/portal.",
        "- Ensure you have the required inputs (loan amount, term, rate, fees if applicable).",
        "",
        "If you tell me what you’re trying to calculate (quote vs illustration), I can suggest which inputs to double-check.",
      ].join("\n");
    }

    case "APPLICATION_STATUS": {
      const ids = entities.applicationIds;

      if (ids.length === 0) {
        return [
          "Application status request:",
          "- Please provide the application reference (e.g. ABC001).",
          "",
          "Once provided, typical information to check includes:",
          "- Current status",
          "- Owner/assignee",
          "- Last updated date/time",
          "- Outstanding requirements/documents",
        ].join("\n");
      }

      return [
        `Application status request for: ${ids.join(", ")}`,
        "",
        "Typical system fields to check:",
        "- Current status",
        "- Owner/assignee",
        "- Last updated date/time",
        "- Outstanding requirements/documents",
        "",
        "If you confirm which system you are using (CRM/workflow), I can suggest where these fields are usually located.",
      ].join("\n");
    }

    case "NEW_STARTER_ACCESS": {
      return [
        "New starter access request:",
        "- Confirm the starter’s name, role, team, and start date.",
        "- Request line manager approval (if required by process).",
        "- Provide core system access + required third-party tools (least privilege).",
        "",
        "If you share the role/team, I can list the typical access set needed for that position.",
      ].join("\n");
    }

    case "TEMPLATE_LETTER_HELP": {
      return [
        "Template letter request:",
        "- Provide the template document and identify the fields to auto-populate.",
        "- Confirm where each field should come from (CRM / application record).",
        "- Create and test merge fields with sample customer data.",
        "",
        "If you share the fields you want filled automatically, I can suggest a clean mapping approach.",
      ].join("\n");
    }

    case "UPDATE_CUSTOMER_EMAIL": {
      const emails = entities.emails;

      const detected =
        emails.length > 0
          ? ["", "Detected email(s):", formatList(emails)].join("\n")
          : "";

      return [
        "Customer email update request:",
        "- Confirm the request is authorised (e.g. broker/customer verification).",
        "- Update the customer record in the CRM.",
        "- Add an audit note (who requested, what changed, when).",
        detected,
        "",
        "If you provide the old and new email explicitly, I can summarise the change request clearly.",
      ]
        .filter((line) => line !== "")
        .join("\n");
    }

    case "UNKNOWN":
    default: {
      return [
        "Sorry — I’m not sure I understood that.",
        "",
        "Try one of these example questions:",
        "- Where can I find the latest lending criteria?",
        "- How do I use the pricing matrix?",
        "- How do I use the funding calculator?",
        "- What information is on the system for application ABC001?",
        "- We have a new starter who needs system access",
        "- Update email from old@example.com to new@example.com",
      ].join("\n");
    }
  }
}
