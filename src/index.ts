
export interface Env {
	API_KEY: string;
	SITE_URL: string;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const response = await fetch(`${env.SITE_URL}/api/v1/cleanup`, {
			headers: {
				'X-API-Key': env.API_KEY
			}
		});
		const result = await response.json();
		return new Response(JSON.stringify(result), { status: response.status });
	},
} satisfies ExportedHandler<Env>;


