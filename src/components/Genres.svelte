<script>
  import { onMount } from 'svelte'
	// import { current_page } from './store';
  const ApiKey = process.env.API_KEY
	const GENRES_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language-en-GB`

	let genres = []

  onMount(async () => {
		genres = await fetch(GENRES_API)
		.then(x => x.json())
		.then(x => x.genres)
		})



</script>

<section class='genres'>
	{#each genres as genre}
		<a class='genre' href=#/genre/{genre.id} key={genre.id}>{genre.name}</a>
	{/each}
</section>

<style>
  .genre {
		background-color:var(--secondary-colour);
		border-radius:30px;
		border: 2px solid var(--border-colour);
		margin: 5px 10px;
		text-decoration: none;
		font-weight: 600;
		padding-bottom: 4px;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 2px;
		display: flex;
		justify-content: center;
		transition: all .4s ease-in-out;
  }  
  .genre:hover {
    transform: scale(1.2);
	}

	.genres {
		background-color: var(--primary-colour);
		max-width: 1250px;
		margin: 10px auto;
		padding: 5px 20px;
		display: flex;
		flex-wrap: wrap;
		font-size: 16px;
		border-radius: 15px;
	}
	section{
		margin-top: 0;
	}
</style>
