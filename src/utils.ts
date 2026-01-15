/**
 * Utility helpers for normalizing user input and extracting entities
 * Reusable and pure
 */

import type { Entities } from "./types";

export function normalize(input: string): string {
  return input.toLocaleLowerCase().trim().replace(/\s+/g, " ");
}

export function extractEntities(input: string): Entities {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
  const applicationIdRegex = /\b[A-Z]{3}\d{3,}\b/g; // e.g. ABC001, XYZ1234

  const emails = input.match(emailRegex) ?? [];
  const applicationIds = input.match(applicationIdRegex) ?? [];

  return {
    emails,
    applicationIds,
  };
}
