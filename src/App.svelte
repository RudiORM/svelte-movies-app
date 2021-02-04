<script>
	import Router from 'svelte-spa-router';
	import routes from './routes.js';
	import Header from './components/Header.svelte'
	import Genres from './components/Genres.svelte'


	// if (process.env.$API_KEY) 
	// 	{console.log('process.env.$API_KEY',process.env.$API_KEY)
	// }
	// if (process.env.API_KEY) {
	// 	console.log('process.env.API_KEY',process.env.API_KEY)
	// }
	console.log(__myapp.env.API_KEY)

</script>

<main>
	<Header />
	<Genres />
	<Router {routes} />
</main>

<style>
main {
	overflow-y:hidden;
}
</style>
