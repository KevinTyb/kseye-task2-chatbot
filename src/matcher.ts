/**
 * Normalizes input
 * Scores each intent based on keyword matches
 * Selects the best match above a specified threshold
 */

import { INTENTS } from "./intents";
import  type { Intent, IntentDefinition, MatchResult } from "./types";
import { normalize } from "./utils";

const MIN_SCORE = 2;

function scoreKeywordMatches(message: string, keyword: string): boolean {
    return message.includes(keyword);
}

function keywordWeight(keyword: string): number {
    //Phrase matches more meaningful than single words
    return keyword.includes(" ") ? 2 : 1;
}

function scoreIntent(message: string, def: IntentDefinition): Omit<MatchResult, "intent"> {
    let score = 0;
    const matchedKeywords: string[] = [];

    for(const keyword of def.keywords) {
        if(scoreKeywordMatches(message, keyword)) {
            score += keywordWeight(keyword);
            matchedKeywords.push(keyword);
        }
    }
    return {score, matchedKeywords};
}

function compareMatches(a: MatchResult, b: MatchResult): number {
    //Higher score wins. If tied, the one with more matched keywords wins
    if(b.score !== a.score) return b.score - a.score;
    return b.matchedKeywords.length - a.matchedKeywords.length;
}

export function detectIntent(input: string, defs: IntentDefinition[] = INTENTS): MatchResult {
    const message = normalize(input);

    const results: MatchResult[] = defs.map((def) => {
        const { score, matchedKeywords } = scoreIntent(message, def);
        return { intent: def.intent, score, matchedKeywords };
    });

    results.sort(compareMatches);

    const best = results[0];

    if (!best || best.score < MIN_SCORE) {
        return { intent: "UNKNOWN", score: 0, matchedKeywords: [] };
    }
    return best;
}

export function isKnownIntent(intent: Intent): boolean {
    return intent !== "UNKNOWN";
}