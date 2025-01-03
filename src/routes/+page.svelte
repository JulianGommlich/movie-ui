<script>
    import plus from '$lib/assets/plus.svg'
    import { onMount } from "svelte";
    import Card from "./Card.svelte";
    import { apiData, moviesData } from "../store";
    import Modal from './Modal.svelte';

	let showModal = $state(false);

    onMount(async () => {
        fetch("http://localhost:8080/movies")
        .then(response => response.json())
        .then(data => apiData.set(data))
        .catch(error => {
            console.error(error);
            return [];
        });
    });
</script>

<h1 class="text-5xl font-semibold mb-8">MyMDB - The Movie Database to trust!</h1>
<div class="flex">
    <button class="border border-solid border-gray-400 rounded-md mb-4 ml-auto p-2 items-center" onclick={() => (showModal = true)}>
        <img alt="Add movie" class="w-4" src={plus} />
    </button>
</div>
{#each $moviesData as movie}
    <Card movie={movie}/>
{/each}

<Modal bind:showModal></Modal>