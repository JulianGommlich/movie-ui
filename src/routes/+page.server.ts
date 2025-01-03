import type { Actions } from "./$types";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        fetch("http://localhost:8080/movies", { 
            method: "POST" , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: formData.get("name"), 
                release_year: formData.get("release_year"), 
                genre: formData.get("genre"),
                is_available: true 
        })}).then(response => response.json())
            .catch(error => {
                console.error(error);
                return [];
            });
    }
} satisfies Actions
