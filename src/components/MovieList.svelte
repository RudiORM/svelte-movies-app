<script>
	import MovieCard from '../components/MovieCard.svelte'
	// import { movies } from '../components/store.js'
	import {fade} from 'svelte/transition'
	export let movies
</script>

<section class='movie-container'>
	{#if movies.length > 0 } 
		{#each movies as movie}
		<MovieCard key={movie.id} {...movie}/>
			{/each}
	{/if}
</section>

<style>

	.movie-container {
		background-color:var(--primary-colour);
		display: flex;
		flex-wrap: wrap;
		justify-content:space-around;
		max-width: 1250px;
		align-items: stretch;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 30px;
		border-radius:15px;
	}


</style>