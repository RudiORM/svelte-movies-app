<script>
  import { onMount } from 'svelte'

  const ApiKey = __myapp.env.API_KEY
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
		background-color: var(--secondary-colour);
		border-radius: 30px;
		border: 2px solid var(--border-colour);
		margin: 2px;
		text-decoration: none;
		font-weight: 600;
		padding-bottom: 2px;
		padding-left: 8px;
		padding-right: 8px;
		padding-top: 1px;
		display: flex;
		justify-content: center;
		transition: all .4s ease-in-out;
  }  
  .genre:hover {
		background-color: rgb(155, 89, 218);
		color: black;
	}

	.active {
    font-weight: 900;
    background-color: red;
    scale: 1.1;
  }

	.genres {
		background-color: var(--primary-colour);
		max-width: 1250px;
		margin: 5px auto;
		padding: 2px;
		display: flex;
		flex-wrap: wrap;
		font-size: 12px;
		border-radius: 15px;
	}
	section{
		margin-top: 0;
	}
</style>
