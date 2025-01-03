<script lang="ts">
    import trash from '$lib/assets/trash.svg';
    import { apiData, moviesData } from '../store';

    export let movie = { id: 0, name: "", release_year: 0, genre: "", is_available: false };
    
    function deleteMovie() {
        fetch(`http://localhost:8080/movies/${movie.id}`, { method: "DELETE"}).then(response => {
            if (response.status === 204) {
                apiData.set($moviesData.filter(movieObj => movieObj !== movie))
            }
        });
    }
</script>

<div class="border border-solid border-gray-400 rounded-md mb-4 p-4">
    <div class="flex flex-wrap">
        <h2 class="text-2xl font-semibold w-11/12">{movie.name}</h2>
        <button class="border border-solid border-gray-400 rounded-md ml-auto p-2 items-center" on:click={deleteMovie}>
            <img alt="Delete movie" class="w-4" src={trash} />
        </button>
        <span class="w-10/12">{movie.release_year}</span>
        {#if movie.is_available}
            <span class="w-1/12 border border-solid border-green-500 bg-green-300 rounded-full text-center text-green-900">verfügbar</span>
        {:else}
            <span class="w-1/12 border border-solid border-red-500 bg-red-300 rounded-full text-center text-red-900">vergeben</span>
        {/if}
        <span class="w-full">{movie.genre}</span>
    </div>
</div>