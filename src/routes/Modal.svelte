<script>
	let { showModal = $bindable() } = $props();

	let dialog = $state();

	$effect(() => {
		if (showModal) dialog.showModal();
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
    class="w-1/2 rounded-sm backdrop-blur-md bg-gray-800 text-white">
	<form class="p-4" method="POST">
        <h2 class="text-3xl font-semibold mb-8">Movie Editor</h2>
        <div id="form-group-name">
            <label for="input-name">Name:</label>
            <input id="input-name" type="text" name="name" required />
        </div>
        <div id="form-group-release-year">
            <label for="input-release-year">Release Year:</label>
            <input id="input-release-year" type="number" name="release_year" required />
        </div>
        <div id="form-group-genre">
            <label for="input-genre">Genre:</label>
            <input id="input-genre" type="text" name="genre" required />
        </div>
		<button class="ml-auto block bg-green-800 p-4 border border-gray-400 rounded-md w-2/12" onclick={() => dialog.close()}>Save</button>
	</form>
</dialog>

<style>
    label {
        font-size: large;
        margin-bottom: 0.5rem;
    }
    input {
        background: transparent;
        border: solid 1px rgb(156, 163, 175);
        border-radius: 0.25rem;
        margin-bottom: 1rem;
        padding: 1rem;
        width: 100%;
    }
</style>