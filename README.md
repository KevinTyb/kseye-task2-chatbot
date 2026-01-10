# Task 2 – Simple Rule-Based Chatbot

## Overview

This project is a **simple, rule-based internal chatbot** created as part of the KSEYE Junior Software Developer assessment (Task 2 – Option B).

The purpose of this utility is to demonstrate:
- clean, readable, and maintainable code
- basic intent matching and control flow
- sensible handling of unknown or ambiguous input
- how the solution could be extended in the future using an AI API

The chatbot is intentionally **non-AI** and deterministic. This mirrors how a real financial-services organisation might start with simple automation before introducing AI-based enhancements.

---

## What the Chatbot Does

- Accepts a user question via the command line
- Matches the question to a predefined intent using simple rules (keyword matching)
- Returns an appropriate predefined response
- Handles unknown queries gracefully

Example intents include:
- Requests for lending criteria
- Pricing matrix guidance
- Application status queries
- New starter access queries
- Template letter requests

---

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Install dependencies
```bash
npm install
```
---

Design Notes

The chatbot uses explicit intent definitions rather than probabilistic matching.

Each intent has:

a clear purpose

a small set of keywords

a single responsibility response

A fallback response is returned if no intent matches confidently.

This design prioritises:

predictability

auditability

ease of maintenance

Extending This with AI (Future Improvement)

This chatbot could be extended using an AI API (e.g. OpenAI) in several ways:

Replace rule-based intent matching with AI-driven classification

Add retrieval-augmented generation (RAG) over approved internal documents

Handle follow-up questions conversationally

Provide summarised answers with source references

Technology Consideration

While this project is implemented in TypeScript, future AI-heavy features could benefit from:

Python-based services (due to strong AI and data libraries)

A hybrid architecture where:

TypeScript handles the interface and orchestration

Python handles AI processing and document retrieval

This separation would allow each language to be used where it is most effective.

Assumptions & Limitations

This is a demonstration utility, not a production system.

No external APIs or databases are used.

Access control and authentication are out of scope but would be essential in a real environment.

Responses are limited to predefined content to avoid incorrect or misleading information.






