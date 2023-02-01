
import words from "$lib/data/words.json";

import { writable } from "svelte/store";

export const theWord = words[Math.floor(Math.random() * (words.length))].toUpperCase();

export let wrong = writable('');
export let right = writable('');

export let fails = writable(0);
