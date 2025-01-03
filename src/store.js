import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const moviesData = derived(apiData, ($apiData) => {
    return $apiData;
});